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
    success: '#269244',
    waring: '#D9730D',
    danger: '#E03E3E',
    info: '#2F80ED',
    link: '#0F62FE',

    theme: { '': '#666666', fg: '#FFFFFF' },
    fg: { '': '#333333' },
    bg: { '': '#FEFEFE', box: '#FEFEFE', btn: '#FEFEFE' },
  },
  // themes: {
  //   light: {},
  //   dark: {
  //     colors: {
  //       success: '#74A16A',
  //       waring: '#FFA344',
  //       danger: '#FF7369',
  //       link: '#529CCA',
  //       theme: { '': '#333333', fg: '#EEEEEE' },
  //       fg: { '': '#EEEEEE' },
  //       bg: { '': '#CCCCCC', box: '#777777', btn: '#777777' },
  //     },
  //   },
  // },
}

export default config
