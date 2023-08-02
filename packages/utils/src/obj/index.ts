export * from './callback'
export * from './error-msg'
export * from './options'

/**
 * 从props配置中获取默认值
 * @param props
 * @param overrideProps
 * @returns
 */
function getDefaultFromProps<T = Record<string, any>>(props: Record<string, any>, overrideProps: T): T | Record<string, any> {
  const defaults = Object.entries(props).reduce<Record<string, any>>((temp, [key, value]) => {
    temp[key] = value?.default
    return temp
  }, {})
  return {
    ...defaults,
    ...overrideProps,
  }
}

export { getDefaultFromProps }
