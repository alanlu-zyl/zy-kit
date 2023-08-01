import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    el: {
      dialog: toLine(
        {
          '': $`r:2x overflow:hidden`,
        },
        { scope: '#mcss' }
      ),
      dialog__header: toLine(
        {
          '': $`p:4x|4x|0 m:0`,
        },
        { scope: '#mcss' }
      ),
      // dialog__headerbtn: toLine({}),
      // dialog__close: toLine({}),
      // dialog__title: toLine({}),
      dialog__body: toLine(
        {
          '': $`p:2x|4x`,
        },
        { scope: '#mcss' }
      ),
      dialog__footer: toLine(
        {
          '_.btn': $`min-w:100`,
        },
        { scope: '#mcss' }
      ),
    },
  },
}

export default config
