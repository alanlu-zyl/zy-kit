import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    // 輸入框
    input: {
      '': toLine({
        '': $`
          box:border rel r:1x overflow:hidden
          flex ai:center jc:space-between h:8x
          fg:fg bg:bg-box b:1|fg/.5
          ~.2s
        `,
        '[invalid]': $`border-color:danger {fg:danger}_.input-icon`,
        '[valid]': $`border-color:success {fg:success}_.input-icon`,
        '_.input-icon': $`fg:fg/.5`,
        '>input': toLine({
          '': $`box:border p:1x|2x full f:inherit fg:inherit bg:none b:none outline:none appearance:none`,
          '::placeholder': $`fg:fg/.5;~.2s`,
          ':focus::placeholder': $`opacity:0`,
          ':not(:empty)::placeholder': $`translateY(-100%)`,
        }),
      }),
      // 圖示
      icon: $`
        block abs-center-y left:2x
        f:3x
        .input_{pl:8x}~input
      `,
      //
      title: $`
        mb:2x {content:'*';fg:danger}[required]::before
      `,
      // 提示訊息
      msg: $`
        f:12 fg:fg/.7 overflow:hidden
        ~.2s max-h:0 opacity:0 invisible
        {mt:1x;max-h:8x;opacity:1;visible}[show]
      `,
      // TODO: Placeholder
      label: $`
        abs top:4x left:2x
        f:16 fg:fg/.5
        f:bold
        transform-origin:0|0
        transform:translate3d(0,0,0)
        ~.2s
        untouchable
      `,
      // TODO:
      focusBg: $`
        z:-1 abs-full bg:fg/.05
        transform-origin:left
        transform:scaleX(0)
      `,
    },
    // 欄位
    field: {
      '': $`{flex;ai:center}>p {flex:0|0|$(w,30%);f:bold}>p>span:nth(1)`,
    },
  },
}

export default config
