import { defineFormKitConfig } from '@formkit/vue'
import { zhTW } from '@formkit/i18n'
import { createAutoAnimatePlugin, createAutoHeightTextareaPlugin, createFloatingLabelsPlugin, createMultiStepPlugin } from '@formkit/addons'

// import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'

// import { createProPlugin, inputs } from '@formkit/pro'

import { loadIcon } from '@iconify/vue'

import '@formkit/themes/genesis'
import '@formkit/addons/css/floatingLabels'

// import '@formkit/addons/css/multistep'

import { messages, rules } from '../formkit/rules'
import inputs from '../formkit/inputs'

export default defineFormKitConfig(() => {
  // here we can access `useRuntimeConfig` because
  // our function will be called by Nuxt.
  // const config = useRuntimeConfig()

  // and we can use the variables to import secrets
  // const pro = createProPlugin(config.FORMKIT_PRO_KEY, inputs)

  return {
    // plugins: [pro],
    locales: { zh: zhTW },
    locale: 'zh',

    // 圖示
    icons: { ...genesisIcons },
    iconLoader: (name) => {
      return loadIcon(name).then((qq) => {
        console.log(qq)
        return `
          <svg width="${qq.width}" height="${qq.height}" viewBox="0 0 ${qq.width} ${qq.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${qq.body}
          </svg>
        `
      })
    },

    plugins: [
      // https://formkit.com/plugins/auto-animate#installation
      createAutoAnimatePlugin(),
      // https://formkit.com/plugins/auto-height-textarea#installation
      createAutoHeightTextareaPlugin(),
      // https://formkit.com/plugins/multi-step#installation
      createMultiStepPlugin(),
      // https://formkit.com/plugins/floating-labels#installation
      createFloatingLabelsPlugin({
        useAsDefault: true, // defaults to false
      }),
    ],

    rules,
    messages,

    // https://formkit.com/guides/create-a-custom-input
    inputs,

    // https://formkit.com/essentials/styling#using-generateclasses-from-formkitthemes
    config: {
      // classes: generateClasses(mcssTheme),
    },
  }
})
