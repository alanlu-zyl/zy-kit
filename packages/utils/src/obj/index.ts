function isObject(obj: any) {
  if (typeof obj !== 'object' || obj === null) return false
  if (typeof Object.getPrototypeOf === 'function') {
    const prototype = Object.getPrototypeOf(obj)
    return prototype === Object.prototype || prototype === null
  }
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function merge(...objects: any[]) {
  return objects.reduce((result, current) => {
    if (Array.isArray(current)) {
      throw new TypeError('Arguments provided to ts-deepmerge must be objects, not arrays.')
    }
    Object.keys(current).forEach((key) => {
      if (['__proto__', 'constructor', 'prototype'].includes(key)) return
      if (Array.isArray(result[key]) && Array.isArray(current[key])) {
        result[key] = merge.options.mergeArrays ? Array.from(new Set(result[key].concat(current[key]))) : current[key]
      } else if (isObject(result[key]) && isObject(current[key])) {
        result[key] = merge(result[key], current[key])
      } else {
        result[key] = current[key]
      }
    })

    return result
  }, {})
}
const defaultOptions = { mergeArrays: true }
merge.options = defaultOptions
merge.withOptions = (options: { mergeArrays: boolean }, ...objects: any) => {
  merge.options = { ...defaultOptions, ...options }
  const result = merge(...objects)
  merge.options = defaultOptions
  return result
}

function hyphenate(str): string {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

/**
 * 从props配置中获取默认值
 * @param props
 * @param overrideProps
 * @returns
 */
function getDefaultFromProps<T = Record<string, any>>(props: Record<string, any>, overrideProps: T): T | Record<string, any> {
  const defaults = Object.entries(props).reduce((temp, [key, value]) => {
    temp[key] = value?.default
    return temp
  }, {})
  return {
    ...defaults,
    ...overrideProps,
  }
}

type CallbackFunction<T extends any[]> = (...args: T) => void

function setCallback<T extends any[]>(callback: CallbackFunction<T> | undefined, fallback: CallbackFunction<T>): CallbackFunction<T> {
  return typeof callback === 'function'
    ? (...args: T) => {
        callback(...args)
        fallback(...args)
      }
    : fallback
}

export { isObject, merge, getDefaultFromProps, setCallback }
