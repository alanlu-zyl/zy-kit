import { type Config } from '@master/css'
import { $ } from '../../helpers/literal'

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
