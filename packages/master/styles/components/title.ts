import { type Config } from '@master/css'
import { $, toLine } from '../../helpers/literal'

const config: Config = {
  classes: {
    // 題目
    subject: {
      '': toLine({
        '': $`flex center-content gap:2x {flex:1}::before,::after`,
        '::before,::after': $`content:'' bt:1|solid opacity:.2`,
      }),
      block: toLine({
        '': $`rel mx:auto mb:80 py:18 max-w:424 fg:theme t:center white-space:nowrap`,
        '@<sm': $`py:12`,
        '@<2xs': $`mb:56 max-w:240`,
        '::before,::after': $`content:'' abs w:116 h:1 bg:theme/.56`,
        '::before': $`top:0 left:0 {w:100}@<sm`,
        '::after': $`bottom:0 right:0 {w:100}@<sm`,
        '>h2': toLine({
          '': $`f:bold f:32 lh:35px`,
          '@<2xs': $`f:20 lh:28px`,
        }),
        '>h3': toLine({
          '': $`pt:10 f:18 f:regular lh:25px fg:G-50`,
          '@<2xs': $`pt:4 f:14 lh:20px`,
        }),
      }),
    },
  },
}

export default config
