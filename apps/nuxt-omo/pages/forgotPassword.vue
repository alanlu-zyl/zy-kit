<script setup lang="ts">
import type { FormKitNode, FormKitSchemaNode } from '@formkit/core'
import { getValidationMessages } from '@formkit/validation'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import { email, phone } from '@zy-kit/config/formkit/rules'

// i18n
const { t } = useI18n()

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: t('forgotPassword.title'),
  ogTitle: t('forgotPassword.title'),
  description: t('forgotPassword.description'),
  ogDescription: t('forgotPassword.description'),
  // ogImage: 'https://example.com/image.png',
})

const currentTab = ref<'phone' | 'email'>('phone')

const text = computed(() => {
  return {
    account: currentTab.value === 'phone' ? t('phoneNumber') : t('email'),
    verifyCode: t('verifyCode'),
    getCode: currentTab.value === 'phone' ? t('forgotPassword.sendBtn.phone') : t('forgotPassword.sendBtn.email'),
    desc: currentTab.value === 'phone' ? t('forgotPassword.help.phone') : t('forgotPassword.help.email'),
    submit: currentTab.value === 'phone' ? t('nextStep') : t('forgotPassword.sendBtn.email'),
  }
})
const validation = computed(() => {
  return {
    account: `required|${currentTab.value === 'phone' ? 'phone' : 'email'}`,
    verifyCode: 'required|length:6',
  }
})

function sendVerifyCode(node: FormKitNode, e: MouseEvent) {
  const validationMessageMap = getValidationMessages(node)
  if (validationMessageMap.size > 0) {
    const message = String([...validationMessageMap.values()][0][0].value)
    return ElMessage({ message, type: 'error', showClose: true })
  }

  const target = e.target! as HTMLButtonElement
  target.disabled = true
  node.props.disabled = true
  let second = 5

  node.props.btnTextNew = t('forgotPassword.countdown', { second })
  const timmer = setInterval(() => {
    second--
    node.props.btnTextNew = t('forgotPassword.countdown', { second })
    if (second < 0) {
      clearInterval(timmer)
      target.disabled = false
      node.props.disabled = false
      node.props.btnTextNew = null
    }
  }, 1000)

  switch (currentTab.value) {
    case 'phone':
      ElMessage({ message: t('forgotPassword.sendSuccess.phone'), type: 'success', showClose: true })
      break
    case 'email':
      ElMessage({ message: t('forgotPassword.sendSuccess.email'), type: 'success', showClose: true })
      break
  }
}

const data = reactive({
  currentTab,
  text,
  validation,
  sendVerifyCode,
})

const schemaPhone: FormKitSchemaNode[] = [
  { $formkit: 'textWithBtn', name: 'account', label: '$text.account', validationLabel: '$text.account', validation: '$validation.account', btnText: '$text.getCode', onBtnClick: '$sendVerifyCode' },
  { $formkit: 'text', name: 'verifyCode', label: '$text.verifyCode', validationLabel: '$text.verifyCode', validation: '$validation.verifyCode', inputmode: 'numeric', autocomplete: 'off' },
  { $el: 'p', attrs: { class: 'f:14 fg:G-40' }, children: '$text.desc' },
  { $formkit: 'submit', classes: { input: 'w:full! mt:8x! f:bold' }, children: '$text.submit' },
]

const schemaEmail: FormKitSchemaNode[] = [
  { $formkit: 'text', name: 'type', value: '$currentTab' },
  { $formkit: 'text', name: 'account', label: '$text.account', validationLabel: '$text.account', validation: '$validation.account' },
  { $el: 'p', attrs: { class: 'f:14 fg:G-40' }, children: '$text.desc' },
  { $formkit: 'submit', classes: { input: 'w:full! mt:8x! f:bold' }, children: '$text.submit' },
]

const schema = computed(() => {
  return currentTab.value === 'phone' ? schemaPhone : schemaEmail
})

const typeEnum = z.enum(['phone', 'email'])

const phoneSchema = z.object({
  type: z.literal(typeEnum.Enum.phone),
  account: z.custom((value) => {
    const formkitNode = { value } as FormKitNode
    return phone(formkitNode)
  }),
  verifyCode: z.string().min(6),
})

const emailSchema = z.object({
  type: z.literal(typeEnum.Enum.email),
  account: z.custom((value) => {
    const formkitNode = { value } as FormKitNode
    return email(formkitNode)
  }),
})

// TODO: type

const zodSchema = z.discriminatedUnion('type', [phoneSchema, emailSchema])

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
  <NuxtLayout name="mobile">
    <template #title>{{ $t('forgotPassword.title') }}</template>
    <div class="mb:6x h:40 flex center-content w:full>div">
      <div class="tabs $glider-w:100%">
        <input id="tab1" v-model="currentTab" type="radio" value="phone" />
        <label for="tab1">{{ $t('phone') }}</label>
        <input id="tab2" v-model="currentTab" type="radio" value="email" />
        <label for="tab2">{{ $t('email') }}</label>
        <span class="tabs-glider"></span>
      </div>
    </div>
    <!-- 表單 -->
    <FormKit id="form" type="form" :actions="false" :plugins="[zodPlugin]" @sumbit="submitHandler">
      <FormKitSchema :schema="schema" :data="data"></FormKitSchema>
    </FormKit>
  </NuxtLayout>
</template>
