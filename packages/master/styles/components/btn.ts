import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    btn: {
      '': $`
        box:border rel overflow:hidden
        inline-flex center-content gap:1x
        p:0x|1x r:inherit w:inherit h:inherit
        f:inherit fg:$(fg,inherit) bg:$(bg,inherit)
        t:center vertical-align:middle
        text-transform:inherit text:none white-space:nowrap
        b:1|$(border,G-50)
        ~.2s transition-property:color,background,border-color,box-shadow
        pointer outline:none
        pointer-events:all
        untouchable>*

        {z:1;fg:$(theme,theme);border-color:$(theme,theme)}:is(:not([disabled]):hover,:focus-within)

        {opacity:.6;cursor:not-allowed;}:is([disabled],[readonly],[loading])
        {bg:B-50/.1}:not([class*="btn-type--"])[disabled]

        {content:'';untouchable;abs;full;middle;center;bg:$(fg,theme);opacity:0;~opacity|.2s}::before
        {opacity:.1}:not([disabled]):active::before

        :host(:empty)_{p:1x}
      `,
      '-ripple': $`
        {content:'';untouchable;abs;full;top:$(y,50%);left:$(x,50%);bg:no-repeat;bg:center}::after
        {bg:theme;bg:radial-gradient(circle,bg|10%,transparent|10.01%)}::after
        {transform:translate(-50%,-50%)|scale(10);opacity:0;~transform|.2s,opacity|.8s}::after
        {transform:translate(-50%,-50%)|scale(0);opacity:.3;~none}:not([disabled]):active::after
      `,
      '-noborder': $`
        b:0 p:calc(0x+1)|calc(1x+1)!
        :host(:empty)_{p:1x!}
      `,
      type: {
        '-dashed': $`border-style:dashed`,
        '-outline': $`
          fg:$(theme,theme)! border-color:$(theme,theme)
          {bg:$(theme,theme)!}::before
        `,
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
