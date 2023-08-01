<script setup lang="ts">
import type { FormKitNode, FormKitSchemaNode } from '@formkit/core'
import { getValidationMessages } from '@formkit/validation'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import { email, phone } from '@zy-kit/config/formkit/rules'

definePageMeta({
  layout: 'mobile',
  title: '忘記密碼',
})

// i18n
const { t } = useI18n()

const currentTab = ref<'phone' | 'email'>('phone')

const text = computed(() => {
  return {
    account: currentTab.value === 'phone' ? t('phoneNumber') : t('email'),
    verifyCode: t('verifyCode'),
    getCode: currentTab.value === 'phone' ? t('getVerifyCode') : t('sendEmail'),
    desc: `請輸入註冊時的${currentTab.value === 'phone' ? t('phoneNumber') : t('email')}，我們將會寄發驗證碼給您，如需協助請洽客服或門市。`,
  }
})
const validation = computed(() => {
  return {
    account: `required|${currentTab.value === 'phone' ? 'phone' : 'email'}`,
    verifyCode: 'required|length:6',
  }
})

function sendSMS(node: FormKitNode, e: MouseEvent) {
  console.log(node, getValidationMessages(node))
  // 1. formkit
  const validationMessageMap = getValidationMessages(node)
  if (validationMessageMap.size > 0) {
    const message = String([...validationMessageMap.values()][0][0].value)
    return ElMessage({ message, type: 'error', showClose: true })
  } else {
    ElMessage({ message: 'formkit ok', type: 'success', showClose: true })
    const target = e.target! as HTMLButtonElement
    target.disabled = true
    node.props.disabled = true
    let second = 5
    const timmer = setInterval(() => {
      node.props.btnTextNew = `${second}秒再發送`
      if (second <= 0) {
        clearInterval(timmer)
        target.disabled = false
        node.props.disabled = false
        node.props.btnTextNew = null
      }
      second--
    }, 1000)
  }
}

const data = reactive({
  currentTab,
  text,
  validation,
  sendSMS,
})
const schema: FormKitSchemaNode[] = [
  { $formkit: 'textWithBtn', name: 'account', label: '$text.account', validationLabel: '$text.account', validation: '$validation.account', btnText: '$text.getCode', onBtnClick: '$sendSMS' },
  { $formkit: 'text', name: 'verifyCode', label: '$text.verifyCode', validationLabel: '$text.verifyCode', validation: '$validation.verifyCode', inputmode: 'numeric', autocomplete: 'off' },
  { $el: 'p', attrs: { class: 'f:14 fg:G-40' }, children: '$text.desc' },
]
const zodSchema = z.object({
  account: z.custom((value) => {
    const formkitNode = { value } as FormKitNode
    return currentTab.value === 'phone' ? phone(formkitNode) : email(formkitNode)
  }),
  verifyCode: z.string().min(6),
})
const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (_formData) => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  if (currentTab.value === 'phone') {
    ElMessage({ message: 'login success', type: 'success', showClose: true })
  } else {
    //
  }
})
</script>

<template>
  <div>
    <div class="mb:6x h:40 flex center-content w:full>div">
      <div class="tabs $glider-w:100%">
        <input id="radio-1" v-model="currentTab" type="radio" value="phone" />
        <label for="radio-1">{{ $t('phone') }}</label>
        <input id="radio-2" v-model="currentTab" type="radio" value="email" />
        <label for="radio-2">{{ $t('email') }}</label>
        <span class="tabs-glider"></span>
      </div>
    </div>
    <!-- 表單 -->
    <FormKit id="form" type="form" :actions="false" :plugins="[zodPlugin]" @sumbit="submitHandler">
      <FormKitSchema :schema="schema" :data="data"></FormKitSchema>
      <FormKit type="submit" :classes="{ input: 'w:full! mt:8x! f:bold' }">{{ t('nextStep') }}</FormKit>
    </FormKit>
  </div>
</template>
