import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    formkit: {
      form: toLine(
        {
          '': $`
            $fk-max-width-input:100%
            $fk-font-size-option:1em
          `,
        },
        { scope: '#mcss' }
      ),
      inner: toLine(
        {
          '': $`
            r:1x
            shadow:0|0|0|1|G-30/.5
            shadow:0|0|0|1|G-30:focus-within
          `,
        },
        { scope: '#mcss' }
      ),
      input: {
        '': toLine(
          {
            '': $`r:1x p:2x|3x`,
            '[data-type="button"]_': $`r:2x g:Y-50 {bg:Y-50/.9}:hover {bg:Y-50/.8}:active`,
            '[data-type="submit"]_': $`r:2x bg:Y-50 {bg:Y-50/.9}:hover {bg:Y-50/.8}:active`,
          },
          { scope: '#mcss' }
        ),
      },
      'prefix-icon': {
        '': toLine(
          {
            '': $`bg:unset shadow:none`,
          },
          { scope: '#mcss' }
        ),
      },
      'label-floating': {
        '': toLine({
          '': $`
            box:border p:1x
            abs left:0x bottom:calc(100%-0x) translateY(100%)
            fg:grey
            ~all|.25s
          `,
          // 'input:not(empty)': 'formkit-label-floating--floating',
          '.formkit-prefix-icon~': 'left:45',
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
