import { obj } from '@zy-kit/utils'

// Base
import { type Config } from '@master/css'
import breakpoints from './base/breakpoints'
import colors from './base/colors'
import keyframes from './base/keyframes'
import mediaQueries from './base/mediaQueries'
import selectors from './base/selectors'
import semantics from './base/semantics'
import values from './base/values'

// Layouts
import normal from './layouts/normal'

// Components
import btn from './components/btn'
import link from './components/link'

const extendsConfig: NonNullable<Config['extends']> = [
  obj.merge(
    // Base
    breakpoints,
    colors,
    keyframes,
    mediaQueries,
    selectors,
    semantics,
    values,
    // Layouts
    normal,
    // Components
    btn,
    link
  ),
]

export default extendsConfig
