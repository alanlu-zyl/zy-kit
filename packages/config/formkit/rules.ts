import type { FormKitProps } from '@formkit/core'

import { email as rules_email } from '@formkit/rules'

export const email: NonNullable<FormKitProps['validationRules']>[1] = rules_email

export const phone: NonNullable<FormKitProps['validationRules']>[1] = (node) => {
  return /^09\d{8}$/.test(String(node.value))
}

export const email_phone: NonNullable<FormKitProps['validationRules']>[1] = (node) => {
  return email(node) || phone(node)
}

export const email_phone_id: NonNullable<FormKitProps['validationRules']>[1] = (node) => {
  return email_phone(node) || /^\d{4}$/.test(String(node.value))
}
