import { createInput, defineFormKitConfig } from '@formkit/vue'
import { zhTW } from '@formkit/i18n'
import { genesisIcons } from '@formkit/icons'

// import { createProPlugin, inputs } from '@formkit/pro'

import '@formkit/themes/genesis'

import { email_phone } from '../formkit/rules'
import OneTimePassword from '../formkit/OneTimePassword.vue'
import { floatingLabelTextInput } from '../formkit/floatingLabelTextInput'

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

    rules: { email_phone },

    messages: {
      en: {
        validation: {
          email_phone({ name }) {
            return ` ${name} Please enter an email or phone number.`
          },
        },
      },
      zh: {
        validation: {
          email_phone({ name }) {
            return ` ${name} 請輸入信箱或手機號碼`
          },
        },
      },
    },

    // https://formkit.com/guides/create-a-custom-input
    inputs: {
      otp: createInput(OneTimePassword, { props: ['digits'] }),
      floatingLabelTextInput,
    },

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
