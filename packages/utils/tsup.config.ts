import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'
import { defineConfig } from 'tsup'

const currentDir = dirname(fileURLToPath(import.meta.url))
async function getIndexFilesInSrc() {
  const indexFiles = await fg('**/index.ts', { cwd: currentDir })

  const obj = indexFiles.reduce((acc, file) => {
    const [_, name] = file.replace('index.ts', '').split('/')
    acc[name || 'index'] = file
    return acc
  }, {})

  return obj
}

const entry = await getIndexFilesInSrc()

export default defineConfig((options) => {
  return {
    // entry:[ 'src/index.ts'],
    entry,
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: !options.watch,
    // shims: true,
    legacyOutput: true,
  }
})
