import en from '../i18n/en.json'
import zh from '../i18n/zh.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'zh',
    messages: {
      zh,
      en,
    },
  }
})
