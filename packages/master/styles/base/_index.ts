import { type Config } from '@master/css'

import animations from './animations'
import colors from './colors'
import mediaQueries from './mediaQueries'
import selectors from './selectors'
import semantics from './semantics'
import values from './values'
import viewports from './viewports'

const base: Record<string, Config> = {
  // Base
  animations,
  colors,
  mediaQueries,
  selectors,
  semantics,
  values,
  viewports,
}

export default base
