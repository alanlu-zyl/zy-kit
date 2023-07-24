import { type Config } from '@master/css'
import { $ } from '../../helpers/literal'

const config: Config = {
  classes: {
    media: {
      '': $`
        rel block overflow:hidden
        m:0 w:full
        {content:'';block;pt:calc($(h)/$(w)*100%);w:full}::before
      `,
    },
    img: {
      '': $`
        abs-center
        {w:full;h:auto}
        .portrait_{w:auto;h:full}
        untouchable
        ~.2s transition-property:opacity,visibility
        .skeleton_{opacity:0;invisible}
        hide[hide]
      `,
    },
  },
}

export default config
