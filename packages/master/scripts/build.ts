import fs from 'node:fs'
import config from '../master.css'

fs.writeFileSync(
  'dist/master.css.cjs',
  `
  /** @type {import('@master/css').Config} */
  export default ${JSON.stringify(config)}
`
)
