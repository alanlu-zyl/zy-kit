import { type Config } from '@master/css'
import { $, toLine } from '../../helpers/literal'

const config: Config = {
  classes: {
    // 手風琴
    accordion: {
      '': toLine({
        '': $`flex flex:wrap`,
        '>*': $`w:full`,
        // Toggle (hide)
        '>input': toLine({
          '': $`z:-1 hide abs 0x0 opacity:0`,
          ':checked~label_tk-icon[type=arrow]': $`rotate(-180deg)`,
        }),
        // Arrow Icon
        '>label_tk-icon[type=arrow]': $`~transform|.2s`,
      }),
      // 標題
      title: toLine({
        '': $`rel pointer`,
        '::after': toLine({
          '': "content:'+' abs right:1x",
          ':checked~': "content:'-'",
        }),
      }),
      // 內容
      content: toLine({
        '': $`grid grid-template-rows:0fr opacity:0 overflow:hidden`,
        transition: $`~.2s transition-property:grid-template-rows,opacity,padding`,
        ':checked~': $`grid-template-rows:1fr opacity:1 py:1x`,
      }),
    },
  },
}

export default config
