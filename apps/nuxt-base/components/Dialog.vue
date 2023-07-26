<script setup lang="ts">
import type { DialogProps } from 'element-plus'
import { ElDialog } from 'element-plus'
import { obj } from '@zy-kit/utils'

export interface IProps extends DialogProps {
  header?: null | string | Component
  component?: null | string | Component
  footer?: null | string | Component
  visible?: boolean | Ref<boolean>
}
const props = withDefaults(defineProps<IProps>(), obj.getDefaultFromProps(ElDialog.props, {}))

const emits = defineEmits<{
  // (event: 'update:visible', visible: boolean): void
  // 關閉
  (event: 'close'): void
  // 已關閉
  (event: 'closed'): void
  // 取消
  (event: 'cancel'): void
  // 確認
  (event: 'confirm', data: any): void
}>()

const localProps = computed(() => {
  const { header, component, footer, visible, ...dialogProps } = props
  return {
    ...dialogProps,
    modelValue: unref(visible),
    onClose: handleClose,
    onClosed: handleClosed,
  }
})

function handleClose() {
  console.log('handleClose')
  emits('close')
}

function handleClosed() {
  console.log('handleClosed')
  emits('closed')
}

function handleCancel() {
  console.log('handleCancel')
  emits('cancel')
}

const componentRef = ref<any>()

function handleConfirm() {
  console.log('handleConfirm')
  const submit: () => Promise<any> = componentRef.value?.submit || (() => Promise.resolve(true))
  submit().then((data) => emits('confirm', data))
}

console.log(props.footer)
</script>

<template>
  <ElDialog v-bind="localProps">
    <template #header>
      <slot name="header">
        <template v-if="typeof header === 'string'">
          {{ header }}
        </template>
        <template v-else>
          <component :is="header"></component>
        </template>
      </slot>
    </template>
    <template #default>
      <slot>
        <template v-if="typeof component === 'string'">
          {{ component }}
        </template>
        <template v-else>
          <component :is="component" ref="componentRef" @confirm="handleConfirm" @cancel="handleCancel"></component>
        </template>
      </slot>
    </template>
    <template #footer>
      <slot name="footer">
        <div v-if="footer === undefined" class="flex jc:center">
          <button class="btn" @click="handleCancel">取消</button>
          <button class="btn btn-type--themes" @click="handleConfirm">確認</button>
        </div>
        <template v-else-if="typeof footer === 'string'">
          {{ footer }}
        </template>
        <template v-else>
          <component :is="footer" @confirm="handleConfirm" @cancel="handleCancel"></component>
        </template>
      </slot>
    </template>
  </ElDialog>
</template>
