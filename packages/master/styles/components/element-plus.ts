import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    el: {
      dialog: $`
        r:1x overflow:hidden
      `,
      dialog__header: toLine({}),
      dialog__headerbtn: toLine({}),
      dialog__close: toLine({}),
      dialog__title: toLine({}),
      dialog__body: toLine({}),
      dialog__footer: toLine({}),
    },
  },
}

export default config
