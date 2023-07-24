import { type Config } from '@master/css'
import { $ } from '../../helpers/literal'

const config: Config = {
  classes: {
    message: {
      '': $`
        inline-flex jc:center ai:center p:1x r:0x
        max-w:xs@md
        f:14 fg:fg word-break:break-all
        bg:bg-box
        shadow:md
        ~.2s|cubic-bezier(.645,.045,.355,1) transition-property:opacity,transform
        opacity:0 translateY(-100%)
        {opacity:1;translateY(0)}[show],:hover
        pointer-events:all

        {f:20;mr:0x}>tk-icon
      `,
    },
  },
}

export default config
