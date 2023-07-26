import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

export default <Config>{
  classes: {
    // 一般初始
    normal: {
      '': toLine({
        '': $`m:0 p:0 f:16 lh:1.4`,
        '_:where(p),_headings': $`m:0`,
        '_:where(kbd)': $`mx:0x p:0x r:0x f:12 fg:B-30 bg:W-50 b:1|B-30/.5 shadow:sm`,
      }),
    },
    // 滾動軸
    scrollbar: {
      '': $`
        {w:1x;h:1x}::scrollbar
        {rounded}::scrollbar,::scrollbar-thumb
        bg:theme/.2::scrollbar
        bg:theme/.6::scrollbar-thumb
        bg:theme/.8::scrollbar-thumb:hover
        bg:theme::scrollbar-thumb:active
        bg:transparent::scrollbar-corner
      `,
    },
  },
}
