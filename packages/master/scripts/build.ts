import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import fs from 'node:fs'
import config from '../master.css'

const currentDir = dirname(fileURLToPath(import.meta.url))
const buildDir = resolve(currentDir, '../dist')
const path = resolve(buildDir, './master.css.cjs')

const content = `
/** @type {import('@master/css').Config} */
export default ${JSON.stringify(config)}
`

async function buildFile(content: string) {
  fs.mkdirSync(buildDir, { recursive: true })
  fs.writeFileSync(path, content)
}

buildFile(content)
