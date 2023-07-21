import { defineFormKitConfig } from '@formkit/vue'
import { zhTW } from '@formkit/i18n'
import { genesisIcons } from '@formkit/icons'

// import { createProPlugin, inputs } from '@formkit/pro'

import '@formkit/themes/genesis'

export default defineFormKitConfig(() => {
  // here we can access `useRuntimeConfig` because
  // our function will be called by Nuxt.
  // const config = useRuntimeConfig()

  // and we can use the variables to import secrets
  // const pro = createProPlugin(config.FORMKIT_PRO_KEY, inputs)

  return {
    // plugins: [pro],
    locales: { zhTW },
    locale: 'zhTW',

    icons: { ...genesisIcons },

    // https://formkit.com/essentials/styling#using-generateclasses-from-formkitthemes
    config: {
      // classes: generateClasses({
      //   global: {
      //     // applies to all input types
      //     outer: 'bg:red',
      //   },
      //   text: {
      //     // only applies to text input type
      //     outer: 'bizz',
      //     input: '$reset fizz',
      //   },
      //   email: {
      //     // only applies to email input type
      //     outer: 'bap',
      //     input: '$reset bop',
      //   },
      // }),
    },
  }
})
