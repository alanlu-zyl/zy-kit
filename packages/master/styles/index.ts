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
import accordion from './components/accordion'
import btn from './components/btn'
import card from './components/card'
import checkbox from './components/checkbox'
import input from './components/input'
import link from './components/link'
import list from './components/list'
import media from './components/media'
import message from './components/message'
import modal from './components/modal'
import ratio from './components/ratio'
import skeleton from './components/skeleton'
import table from './components/table'
import title from './components/title'

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
    accordion,
    btn,
    card,
    checkbox,
    input,
    link,
    list,
    media,
    message,
    modal,
    ratio,
    skeleton,
    table,
    title
  ),
]

export default extendsConfig
