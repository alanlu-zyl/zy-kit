import { type Config } from '@master/css'

const config: Config = {
  values: {
    '0x': 4,
    '1x': 8,
    '2x': 16,
    '3x': 24,
    '4x': 32,
    '5x': 40,
    header: 45,
  },
  rules: {
    boxShadow: {
      values: {
        xs: '0|1|2|0|B-50/.05',
        sm: '0|1|3|0|B-50/.1,0|1|2|-1|B-50/.1',
        md: '0|4|6|-1|B-50/.1,0|2|4|-2|B-50/.1',
        lg: '0|10|15|-3|B-50/.1,0|4|6|-4|B-50/.1',
        xl: '0|20|25|-5|B-50/.1,0 8|10|-6|B-50/.1',
        inner: 'inset|0|2|4|0|B-50/.05',
        none: '0|0|#0000',
      },
    },
    zIndex: {
      values: {
        header: 100000,
        modal: 100050,
        message: 100051,
        devPanel: 999999,
      },
    },
  },
}

export default config
