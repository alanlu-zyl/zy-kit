import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    modal: {
      '': $`
        z:modal
        flex fixed middle center
        p:2x
        overflow-x:hidden overflow-y:auto outline:none
        bg:B-50/.3
        opacity:0 invisible
        ~.2s|ease-out transition-property:opacity,visibility
        {opacity:1;visible}[open]
      `,
      dialog: $`
        flex m:auto p:4x r:1x
        min-w:8xs@3xs
        w:full@<3xs
        bg:bg-box
        shadow:xl
        transition-property:opacity,transform
        ~.2s|cubic-bezier(.645,.045,.355,1)
        opacity:0 scale(.5)
        [open]_{opacity:1;scale(1)}
        [open].modal--static>{scale(1.02)}
      `,
      close: $`
        abs top:0 right:0 flex
        w:4x h:4x f:6x font-family:none
      `,
    },
    dialog: {
      type: $`
        hide f:30 {block;mr:2x}[icon]
      `,
      content: $`
        rel w:full
      `,
      title: $`
        mb:2x f:24 f:bolder lh:1.2 user-select:none
      `,
      body: $`
        min-h:50 overflow:auto
      `,
      footer: $`
        mt:2x t:right user-select:none
      `,
    },
  },
}

export default config
