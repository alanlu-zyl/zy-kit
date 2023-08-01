import type { FormKitProps } from '@formkit/core'
import type { PluginConfigs } from '@formkit/vue'
import { email as rules_email } from '@formkit/rules'

type locale = 'zh' | 'en'
const _messages: Record<string, Record<locale, (...args: any[]) => string>> = {}

export const email: NonNullable<FormKitProps['validationRules']>[1] = rules_email

export const phone: NonNullable<FormKitProps['validationRules']>[1] = (node) => {
  return /^09\d{8}$/.test(String(node.value))
}
_messages.phone = {
  zh: ({ name }) => `${name} 請輸入手機號碼`,
  en: ({ name }) => `${name} Please enter a phone number.`,
}

export const email_phone: NonNullable<FormKitProps['validationRules']>[1] = (node) => {
  return email(node) || phone(node)
}
_messages.email_phone = {
  zh: ({ name }) => `${name} 請輸入信箱或手機號碼`,
  en: ({ name }) => `${name} Please enter an email or phone number.`,
}

export const email_phone_id: NonNullable<FormKitProps['validationRules']>[1] = (node) => {
  return email_phone(node) || /^\d{4}$/.test(String(node.value))
}
_messages.email_phone_id = {
  zh: ({ name }) => `${name} 請輸入信箱或手機號碼或會員編號`,
  en: ({ name }) => `${name} Please enter an email or phone number or ID.`,
}

export const rules = {
  phone,
  email_phone,
  email_phone_id,
}

export const messages = Object.entries(_messages).reduce(
  (acc, [key, messages]) => {
    Object.entries(messages).forEach(([locale, func]) => {
      acc[locale].validation![key] = func
    })
    return acc
  },
  { zh: { validation: {} }, en: { validation: {} } } as PluginConfigs['messages']
)
