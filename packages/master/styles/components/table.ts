import { type Config } from '@master/css'
import { $ } from '@zy-kit/utils/mcss'

const config: Config = {
  classes: {
    // 表格
    table: {
      head: $`
        grid-cols:$(cols,6)
        p:1x
        f:heavy t:center
        fg:theme
        bg:theme/.4
      `,
      body: $`
        bg:theme/.1
        {max-h:50vh;overflow-y:auto}@xs
        {max-h:75vh;overflow-y:auto}@<xs
      `,
      tr: $`
        rel ai:center
        {bg:theme/.15}:nth-child(odd)
        {bb:1|theme/.3}:not(:last-of-type)
        {border-bottom-width:2}:not(:last-of-type)@<xs
        {grid-cols:$(cols,6);t:center}@xs
        {grid-rows:$(rows,3);t:left}@<xs
        {z:-1;content:'';abs-full;bg:theme;opacity:0;~opacity|.2s;untouchable}::before
        {opacity:.1;z:0}:hover::before
        {p:1x}>div@xs
        {p:0x}>div@<xs
      `,
    },
  },
}

export default config
