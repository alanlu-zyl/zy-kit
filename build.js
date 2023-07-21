const result = {
  extends: [
    { breakpoints: {} },
    {
      colors: {
        W: { 50: '#FFFFFF' },
        B: { 20: '#444444', 30: '#333333', 40: '#252525', 50: '#1D1D1D' },
        G: { 10: '#F8F8F8', 20: '#F2F2F2', 30: '#CBCBCB', 40: '#B2B2B2', 50: '#999999' },
        Y: { 20: '#FFECA0', 50: '#FBC700' },
        success: '#269244',
        waring: '#D9730D',
        danger: '#E03E3E',
        info: '#2F80ED',
        link: '#0F62FE',
        theme: { '': 'brown-60', fg: '#FFFFFF' },
        fg: { '': '#333333' },
        bg: { '': '#FEFEFE', box: '#FEFEFE', btn: '#FEFEFE' },
      },
      themes: {
        light: {},
        dark: {
          colors: {
            success: '#74A16A',
            waring: '#FFA344',
            danger: '#FF7369',
            link: '#529CCA',
            theme: { '': '#333333', fg: '#EEEEEE' },
            fg: { '': '#EEEEEE' },
            bg: { '': '#CCCCCC', box: '#777777', btn: '#777777' },
          },
        },
      },
    },
    {
      semantics: { spin: { animation: '1s linear infinite rotate' } },
      keyframes: {
        shimmer: { to: { transform: 'translateX(100%)' } },
        skeletonWave: { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } },
        rollIn: { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(0)' } },
      },
    },
    { mediaQueries: { hover: '(any-hover:hover)' } },
    { selectors: { _headings: '_:where(h1,h2,h3,h4,h5,h6)' } },
    {
      semantics: {
        nowrap: { 'white-space': 'nowrap' },
        pointer: { cursor: 'pointer', 'user-select': 'none' },
        abs: {
          full: { position: 'absolute', top: '0', right: '0', bottom: '0', left: '0' },
          center: {
            '': { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
            y: { position: 'absolute', top: '50%', transform: 'translateY(-50%)' },
            x: { position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
          },
        },
      },
    },
    {
      values: { '0x': 4, '1x': 8, '2x': 16, '3x': 24, '4x': 32, '5x': 40, header: 45 },
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
        zIndex: { values: { header: 100000, modal: 100050, message: 100051, devPanel: 999999 } },
      },
    },
    {
      classes: {
        normal: { '': 'm:0 p:0 f:16 lh:1.4 {m:0}_:where(p),_headings {mx:0x;p:0x;r:0x;f:12;fg:B-30;bg:W-50;b:1|solid|B-30/.5;shadow:sm}_:where(kbd)' },
        scrollbar: {
          '': '{w:1x;h:1x}::scrollbar {rounded}::scrollbar,::scrollbar-thumb bg:theme/.2::scrollbar bg:theme/.6::scrollbar-thumb bg:theme/.8::scrollbar-thumb:hover bg:theme::scrollbar-thumb:active bg:transparent::scrollbar-corner',
        },
      },
    },
    { classes: { btn: { '': 'font:14 text:center h:40 p:10|15', primary: 'bg:primary fg:white', outline: 'b:1|solid|slate-90' } } },
  ],
  classes: {},
  colors: {},
  themes: {},
  rules: {},
  values: {},
  semantics: {},
  breakpoints: {},
  mediaQueries: {},
  keyframes: {},
  selectors: {},
  functions: {},
}
