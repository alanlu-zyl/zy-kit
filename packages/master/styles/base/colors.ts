import { type Config } from '@master/css'

const baseColors = {
  W: { 50: '#FFFFFF' },
  B: { 50: '#1D1D1D', 40: '#252525', 30: '#333333', 20: '#444444' },
  G: { 50: '#999999', 40: '#B2B2B2', 30: '#CBCBCB', 20: '#F2F2F2', 10: '#F8F8F8' },
  Y: { 50: '#FBC700', 20: '#FFECA0' },
}

const config: Config = {
  colors: {
    ...baseColors,
    success: '#269244 #74A16A@dark',
    waring: '#D9730D #FFA344@dark',
    danger: '#E03E3E #FF7369@dark',
    info: '#2F80ED',
    link: '#0F62FE #529CCA@dark',

    theme: { '': '#666666 #333333@dark', fg: '#FFFFFF #EEEEEE@dark' },
    fg: { '': '#333333 #EEEEEE@dark' },
    bg: { '': '#FEFEFE #CCCCCC@dark', box: '#FEFEFE #777777@dark', btn: '#FEFEFE #777777@dark' },
  },
}

export default config
