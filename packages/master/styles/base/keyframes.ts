import { type Config } from '@master/css'

const config: Config = {
  semantics: {
    spin: {
      animation: '1s linear infinite rotate',
    },
  },
  keyframes: {
    shimmer: { to: { transform: 'translateX(100%)' } },
    skeletonWave: { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } },
    rollIn: { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(0)' } },
  },
}

export default config
