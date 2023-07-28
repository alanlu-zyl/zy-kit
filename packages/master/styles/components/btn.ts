import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    btn: {
      '': toLine({
        '': $`
          box:border rel overflow:hidden
          inline-flex center-content gap:2x
          p:1x|2x r:2x
          w:inherit h:inherit
          f:inherit t:center vertical-align:middle
          text-transform:inherit text:none white-space:nowrap
          fg:$(fg,inherit) bg:$(bg,inherit) b:1|$(border,G-50/.5)
          ~.2s transition-property:color,background,border-color,box-shadow
          pointer outline:none
          pointer-events:all
        `,
        // 焦點
        ':is(:not([disabled]):hover,:focus-within)': $`z:1 fg:$(theme,inherit) border-color:$(theme,G-50/.7)`,
        // 禁用
        ':is([disabled],[readonly],[loading])': $`opacity:.6 cursor:not-allowed`,
        // 預設禁用
        ':not([class*="btn-type--"])[disabled]': $`bg:B-50/.1`,
        // 背景
        '::before': toLine({
          '': $`content:'' untouchable abs full middle center bg:$(fg,G-50) opacity:0 ~opacity|.2s`,
          ':not([disabled]):active_$': $`opacity:.1`,
        }),
        '>*': $`untouchable`,
      }),
      '-noborder': $`
        b:0 p:calc(1x+1)|calc(2x+1)!
      `,
      '-ripple': $`
        {content:'';untouchable;abs;full;top:$(y,50%);left:$(x,50%);bg:no-repeat;bg:center}::after
        {bg:theme;bg:radial-gradient(circle,bg|10%,transparent|10.01%)}::after
        {transform:translate(-50%,-50%)|scale(10);opacity:0;~transform|.2s,opacity|.8s}::after
        {transform:translate(-50%,-50%)|scale(0);opacity:.3;~none}:not([disabled]):active::after
      `,
      type: {
        '-dashed': $`border-style:dashed`,
        '-outline': toLine({
          '': $`fg:$(theme,theme)! border-color:$(theme,theme)`,
          // 焦點
          ':is(:not([disabled]):hover,:focus-within)': $`border-color:$(theme,theme)!`,
          // 背景
          '::before': $`bg:$(theme,theme)!`,
        }),
        '-font': $`
          btn--noborder
          {content:unset!}::before
        `,
        '-flat': $`
          btn--noborder
          {opacity:.1}:is(:not([disabled]):hover,:focus-within)::before
          {opacity:.2!}:not([disabled]):active::before
        `,
        '-theme': $`
          btn-type--flat
          fg:$(theme-fg,theme-fg)! bg:$(theme,theme)!
          {bg:$(theme-fg,theme-fg)!}::before
          {bg:theme;bg:radial-gradient(circle,bg|10%,transparent|10.01%)}.btn--ripple::after
        `,
      },
      shape: {
        '-circle': $`round`,
      },
    },
  },
}

export default config
