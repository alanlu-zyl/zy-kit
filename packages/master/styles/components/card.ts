import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    // 卡片
    card: {
      '': $`
        my:4x p:4x|6x
        r:2x overflow:hidden
        bg:bg-box
        shadow:lg
      `,
    },
  },
}

export default config
