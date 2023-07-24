import { type Config } from '@master/css'
import { $ } from '../../helpers/literal'

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
        {max-h:50vh;overflow-y:auto}@sm
        {max-h:75vh;overflow-y:auto}@<sm
      `,
      tr: $`
        rel ai:center
        {bg:theme/.15}:nth-child(odd)
        {bb:1|solid|theme/.3}:not(:last-of-type)
        {border-bottom-width:2}:not(:last-of-type)@<sm
        {grid-cols:$(cols,6);t:center}@sm
        {grid-rows:$(rows,3);t:left}@<sm
        {z:-1;content:'';abs-full;bg:theme;opacity:0;~opacity|.2s;untouchable}::before
        {opacity:.1;z:0}:hover::before
        {p:1x}>div@sm
        {p:0x}>div@<sm
      `,
    },
  },
}

export default config
