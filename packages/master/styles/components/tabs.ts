import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    // 題目
    tabs: {
      '': toLine({
        '': $`box:border rel flex jc:space-between w:full $w:50% py:2x user-select:none`,
        '_input[type="radio"]': $`hide`,
        '>label': $`flex:1 center-content w:$(w) cursor:pointer t:center ~color|.1s|ease-in fg:G-50 text:ellipsis white-space:nowrap overflow:hidden`,
        '_input[type="radio"]:checked+label': $`f:bold fg:B-50`,
        '_input[id="radio-1"]:checked~.tabs-glider': $`translateX(0)`,
        '_input[id="radio-2"]:checked~.tabs-glider': $`translateX(100%)`,
        '_input[id="radio-3"]:checked~.tabs-glider': $`translateX(200%)`,
        '_input[id="radio-4"]:checked~.tabs-glider': $`translateX(300%)`,
      }),
      glider: {
        '': toLine({
          '': $`abs w:$(w) h:2 bottom:0 flex center-content ~.2s|ease-out`,
          '::before': $`content:'' w:$(glider-w,30%) min-w:70 h:full bg:Y-50 r:1x`,
        }),
      },
    },
  },
}

export default config
