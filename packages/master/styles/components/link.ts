import { type Config } from '@master/css'
import { $, toLine } from '@zy-kit/utils/mcss'
import cv from 'class-variant'

export const link = cv('link', ({ color }) =>
  toLine({
    '!': $`fg:${color} {fg:${color}/.8}:hover {fg:${color}/.6}:active`,
  })
)

const config: Config = {
  classes: {
    // 連結
    link: {
      '': toLine({
        '': $`rel inline-flex ai:center gap:5 pointer fg:link text-decoration:none ~.2s fg:link/.8:hover fg:link/.6:active`,
        '::before': $`content:'' abs bottom:0.1em w:full bb:1|solid`,
      }),
    },
  },
}

export default config
