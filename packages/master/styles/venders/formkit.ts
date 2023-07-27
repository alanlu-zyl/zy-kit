import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    formkit: {
      form: $`
        $fk-max-width-input:100%
        $fk-font-size-option:1em
      `,
      inner: $`rel`,
      input: {
        '': toLine(
          {
            '[data-type="button"]_': $`bg:Y-50 {bg:Y-50/.9}:hover {bg:Y-50/.8}:active`,
            '[data-type="submit"]_': $`bg:Y-50 {bg:Y-50/.9}:hover {bg:Y-50/.8}:active`,
          },
          { scope: '#mcss' }
        ),
      },
      'label-floating': {
        '': toLine({
          '': $`
            box:border p:.25em
            abs left:.5em bottom:calc(100%-.5em) translateY(100%)
            fg:grey
            ~all|.25s
          `,
          'input:focus~': 'formkit-label-floating--floating',
          'textarea:focus~': 'formkit-label-floating--floating',
          '[data-has-value="true"]': 'formkit-label-floating--floating',
        }),
        '-floating': $`
          font-size:.7em bg:white
          bottom:100% translateY(50%)
        `,
      },
    },
  },
}

export default config
