import type { AppContext, Component, ComponentPublicInstance, VNode } from 'vue'
import { createVNode, getCurrentInstance, render } from 'vue'

export interface Options {
  visible?: boolean | Ref<boolean>
  destroyOnClose?: boolean
  rootClass?: string
  onClose?: () => void
  onClosed?: () => void
  appendTo?: HTMLElement | string
  [key: string]: unknown
}

export interface CommandComponent {
  (options: Options): VNode
  close: () => void
}

function getAppendToElement(props: Options): HTMLElement {
  let appendTo: HTMLElement | null = document.body
  if (props.appendTo) {
    if (typeof props.appendTo === 'string') {
      appendTo = document.querySelector<HTMLElement>(props.appendTo)
    }
    if (props.appendTo instanceof HTMLElement) {
      appendTo = props.appendTo
    }
    if (!(appendTo instanceof HTMLElement)) {
      appendTo = document.body
    }
  }
  return appendTo
}

function initInstance<T extends Component>(Component: T, props: Options, container: HTMLElement, appContext: AppContext | null = null) {
  const vNode = createVNode(Component, props)
  vNode.appContext = appContext
  render(vNode, container)

  getAppendToElement(props).appendChild(container)
  return vNode
}

// https://juejin.cn/post/7253062314306322491
export function useCommandComponent<T extends Component>(Component: T) {
  const appContext = getCurrentInstance()?.appContext
  if (appContext) {
    const currentProvides = (getCurrentInstance() as any)?.provides
    Reflect.set(appContext, 'provides', { ...appContext.provides, ...currentProvides })
  }

  const CommandComponent = ({ rootClass, ...options }: Options) => {
    const container = document.createElement('div')
    if (rootClass) container.className = rootClass

    // 解綁
    function unmount(): void {
      console.log('unmount', options.title)
      render(null, container)
      container.parentNode?.removeChild(container)
    }
    // 綁定
    function mount(): VNode | null {
      console.log('mount', options.title)
      const vNode = initInstance<T>(Component, options, container, appContext)
      const vm = vNode.component?.proxy as ComponentPublicInstance<Options>
      for (const prop in options) {
        if (Reflect.has(options, prop) && !Reflect.has(vm.$props, prop)) {
          console.log('@@@', prop)
          vm[prop as keyof ComponentPublicInstance] = options[prop]
        }
      }
      return vNode
    }

    function open() {
      ;(options.visible as Ref<boolean>).value = true
    }
    function close() {
      ;(options.visible as Ref<boolean>).value = false
    }
    function closed() {
      if (options.destroyOnClose) unmount()
    }

    if (typeof options.onClosed !== 'function') {
      options.onClosed = closed
    } else {
      const originOnClosed = options.onClosed
      options.onClosed = () => {
        originOnClosed()
        closed()
      }
    }

    if (typeof options.onClose !== 'function') {
      options.onClose = close
    } else {
      const originOnClose = options.onClose
      options.onClose = () => {
        originOnClose()
        close()
      }
    }

    const initVisible = options?.visible || true
    options.visible = ref(initVisible)

    if (initVisible) {
      open()
      mount()
    }

    console.log('initVisible', initVisible)

    return { unmount, mount, open, close }
  }

  return CommandComponent
}

export default useCommandComponent
