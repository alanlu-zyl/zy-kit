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
      'prefix-icon': {
        '': toLine(
          {
            '': $`bg:unset shadow:none`,
          },
          { scope: '#mcss' }
        ),
      },
      label: {
        // '': toLine(
        //   {
        //     '[data-floating-label="true"]_': $`
        //       left:1x
        //       bottom:calc(100%-1x)
        //       _$$_input:focus~{bottom:100%}
        //       _$$_textarea:focus~{bottom:100%}
        //       _$$:not([data-empty='true']){bottom:100%}
        //       _$$[data-expanded='true']{bottom:100%}
        //     `,
        //   },
        //   { scope: '#mcss' }
        // ),
      },
    },
  },
}

export default config
