import { zhTW } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'
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
    icons: { ...genesisIcons },
    // plugins: [pro],
    locales: { zhTW },
    locale: 'zhTW',
  }
})
