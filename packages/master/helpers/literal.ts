/**
 * 一個函數，它接受“strings”數組和“tokens”作為參數並返回一個字符串。
 *
 * @param {TemplateStringsArray} strings - 用作模板的字符串數組。
 * @param {any[]} tokens - 要插入到模板中的標記數組。
 * @return {string} - 將標記插入模板後得到的字符串。
 */
function literal(strings: TemplateStringsArray, ...tokens: any[]): string {
  return strings
    .reduce((result, value, index) => result + value + (tokens[index] || ''), '')
    .replace(/\/\*[^\/]*\*\//gm, '')
    .replace(/(?:\n(?:\s*))+/g, ' ')
    .trim()
}

/**
 * 根據提供的配置生成 CSS 組字符串。
 *
 * @param config - 用於生成 CSS 組字符串的配置對象。
 * @returns CSS 組字符串。
 */
function group(config: {
  // 父選擇器
  parent?: string
  // 選擇器
  selector: string
  // 樣式
  cls: string
  // 媒體查詢
  mq?: string
}): string {
  const { parent, selector, cls, mq } = config

  const unitArr: string[] = []
  const otherGroup: string[] = []

  cls.split(' ').forEach((target) => {
    if (!target.includes('{')) {
      unitArr.push(target)
    } else {
      const reg = /^(.+){0,1}{(.+)}(.+){0,1}$/
      const r = target.match(reg)!

      let _mq = mq
      let _selector = r[3] || ''

      if (_selector[0] === '@') {
        _mq = _selector
        _selector = selector
      } else {
        _selector = _selector.includes('_$') ? _selector.replace('_$', selector) : selector + _selector
      }

      try {
        otherGroup.push(
          group({
            parent: r[1],
            selector: _selector,
            cls: r[2].split(';').join(' '),
            mq: _mq,
          })
        )
      } catch (error) {
        console.log(target, error)
      }
    }
  })

  const classes = unitArr.join(';')

  return `${parent || ''}{${classes}}${selector}${mq || ''}${otherGroup.length ? ` ${otherGroup.join(' ')}` : ''}`
}

/**
 * 將具有鍵值對的對象轉換為 CSS 類的字符串。
 *
 * @param {Record<string, string>} obj - 包含鍵值對的對象。
 * @param {boolean} [showLog] - 可選標誌，指示是否將生成的類記錄到控制台。
 * @return {string} - CSS 類的字符串。
 */
function toLine(obj: Record<string, string>, showLog?: boolean): string {
  const classes = Object.entries(obj).reduce<string[]>((cls, [selector, classes]) => {
    if (['_', '>', '~', '+'].includes(selector.charAt(selector.length - 1))) {
      classes = group({ parent: selector, selector: '', cls: classes })
    } else if (['_', '>', '~', '+', ':', '[', '@'].includes(selector[0])) {
      classes = group({ selector, cls: classes })
    }

    return cls.concat(classes)
  }, [])
  if (showLog) console.log(classes)
  return classes.join(' ')
}

export { literal as $, group, toLine }
