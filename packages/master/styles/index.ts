import merge from 'ts-deepmerge'
import { type Config } from '@master/css'

// Base
import base from './base/_index'

// Layouts
import layouts from './layouts/_index'

// Components
import components from './components/_index'

// Vendors
import elementPlus from './venders/element-plus'
import formkit from './venders/formkit'

const mergedConfig = merge<Config[]>(
  // Base
  ...Object.values(base),
  // Layouts
  ...Object.values(layouts),
  // Components
  ...Object.values(components),
  // Vendors
  elementPlus,
  formkit
)

export default mergedConfig
