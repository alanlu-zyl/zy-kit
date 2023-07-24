import { type Config } from '@master/css'
import { $ } from '../../helpers/literal'

const config: Config = {
  classes: {
    // 清單
    list: {
      '': $`
        lh:1.4;
        {m:0;p:0;counter-reset:item;list-style-type:none}_ol,_ul
        {m:0}_li
        {table;my:0.25em;counter-increment:item}_ol>li,_ul>li
        {table-cell;pr:0.5em;content:counters(item,'.')|'.';white-space:nowrap;word-break:initial}_ol>li::before
      `,
      '-nested': $`
        {content:counters(item,'.')!}_li::before
      `,
      '-bracket': $`
        {content:'('|counter(item)|')'!}_li::before
      `,
      '-none': $`
        .list_{content:unset!}_li::before
      `,
    },
  },
}

export default config
