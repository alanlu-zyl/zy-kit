import type { FormKitProps } from '@formkit/core'

import { email } from '@formkit/rules'

export const email_phone: NonNullable<FormKitProps['validationRules']>[1] = (node) => {
  return email(node) || /^09\d{8}$/.test(String(node.value))
}
