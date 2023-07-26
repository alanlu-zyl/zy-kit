import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    ratio: {
      label: $`
        box:border outline:0 pointer
        flex ai:center gap:1x
      `,
      checked: {
        '': $`
          box:border rel
          flex center-content round
          w:1em h:1em
          ~.2s
          :not([disabled]):hover_{z:1}
          {z:-1;box:border;content:'';abs;full;round;bg:$(theme)}::before
          {opacity:.2;scale(0);~.2s|cubic-bezier(.12,.4,.29,1.46)|.1s}::before
          #radio:focus-visible+label_{scale(2.5)}::before

          {box:border;content:'';abs;center;middle;w:1x;h:1x;round;bg:$(theme)}::after
          {~.2s|cubic-bezier(.12,.4,.29,1.46)|.1s}::after
        `,
        '-default': $`
          b:1|G-40
          [disabled]_{background:rgba(0,0,0,.1)}
          :not([disabled]):hover_{border-color:$(theme)}
          {bg:$(theme);scale(0)}::after

          [checked]_{border-color:$(theme)}
          [checked]_{scale(1)}::after
        `,
        '-theme': $`
          bg:$(theme)
          {b:2|white;scale(0)}::after

          [checked]_{scale(1)}::after
        `,
      },
    },
  },
}

export default config
