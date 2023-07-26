import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    // 卡片
    card: {
      '': $`
        my:2x p:2x|3x
        r:1x overflow:hidden
        bg:bg-box
        shadow:lg
      `,
    },
  },
}

export default config
