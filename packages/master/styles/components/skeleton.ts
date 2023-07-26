import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    // 骨架屏
    skeleton: {
      '': $`
        rel overflow:hidden user-select:none
        bg:$(skeleton-bg,transparent)
        {content:'_';invisible}:is(.skeleton--text):before
        {content:'';abs-full;bg:linear-gradient(90deg,bg-box/.1|0%,bg-box/.5|20%,bg-box/.5|60%,bg-box/.1);translateX(-100%);@shimmer|2s|infinite}::after
      `,
    },
  },
}

export default config
