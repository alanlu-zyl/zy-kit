import { type Config } from '@master/css'

const config: Config = {
  semantics: {
    nowrap: { 'white-space': 'nowrap' },
    pointer: { cursor: 'pointer', 'user-select': 'none' },
    abs: {
      full: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
      center: {
        '': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
        y: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
        x: {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
    },
  },
}

export default config
