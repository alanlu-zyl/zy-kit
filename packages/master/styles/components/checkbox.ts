import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    checkbox: {
      label: $`
        box:border outline:0 pointer
        flex ai:center gap:1x
      `,
      checked: {
        '': $`
          box:border rel
          flex center-content r:0x
          w:1em h:1em
          ~.2s
          :not([disabled]):hover_{z:1}

          {scale(0);fg:W-50;~.2s|cubic-bezier(.12,.4,.29,1.46)|.1s}>tk-icon

          {z:-1;box:border;content:'';abs;full;round;bg:$(theme)}::before
          {opacity:.2;scale(0);~.2s|cubic-bezier(.12,.4,.29,1.46)|.1s}::before
          #checkbox:focus-visible+label_{scale(2.5)}::before
        `,
        '-default': $`
          b:1|G-40
          [disabled]_{background:rgba(0,0,0,.1)}
          :not([disabled]):hover_{border-color:$(theme)}
          [checked]_{border-color:$(theme);bg:$(theme)}
          [checked]_{scale(1)}>tk-icon
        `,
      },
    },
  },
}

export default config
