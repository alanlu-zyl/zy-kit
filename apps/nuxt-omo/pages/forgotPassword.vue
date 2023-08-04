<script setup lang="ts">
import type { FormKitNode, FormKitSchemaNode } from '@formkit/core'
import { getValidationMessages } from '@formkit/validation'

import { getNode } from '@formkit/core'
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

const typeEnum = z.enum(['phone', 'email'])
const phoneSchema = z.object({
  currentTab: z.literal(typeEnum.Enum.phone),
  account: z.string().refine((value) => {
    const formkitNode = { value } as FormKitNode
    return phone(formkitNode)
  }),
  verifyCode: z.string().min(6),
})
const emailSchema = z.object({
  currentTab: z.literal(typeEnum.Enum.email),
  account: z.string().refine((value) => {
    const formkitNode = { value } as FormKitNode
    return email(formkitNode)
  }),
})
const zodSchema = z.discriminatedUnion('currentTab', [phoneSchema, emailSchema])

type tabType = z.infer<typeof typeEnum>
const data = reactive({
  tabs: computed<Record<tabType, string>>(() => ({
    [typeEnum.Enum.phone]: t('phone'),
    [typeEnum.Enum.email]: t('email'),
  })),
})

type formType = z.infer<typeof zodSchema>
const formData = reactive<formType>({
  currentTab: typeEnum.Enum.phone,
  account: '',
  verifyCode: '',
})

const text = computed(() => {
  return {
    [typeEnum.Enum.phone]: {
      account: t('phoneNumber'),
      verifyCode: t('verifyCode'),
      getCode: t('forgotPassword.sendBtn.phone'),
      desc: t('forgotPassword.help.phone'),
      submit: t('nextStep'),
    },
    [typeEnum.Enum.email]: {
      account: t('email'),
      getCode: t('forgotPassword.sendBtn.email'),
      desc: t('forgotPassword.help.email'),
      submit: t('forgotPassword.sendBtn.email'),
    },
  }[formData.currentTab]
})
const validation = computed(() => {
  return {
    [typeEnum.Enum.phone]: {
      account: `required|phone`,
      verifyCode: 'required|length:6',
    },
    [typeEnum.Enum.email]: {
      account: `required|email`,
    },
  }[formData.currentTab]
})

const schemaData = reactive({
  currentTab: formData.currentTab,
  text,
  validation,
  sendVerifyCode,
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

  switch (formData.currentTab) {
    case typeEnum.Enum.phone:
      ElMessage({ message: t('forgotPassword.sendSuccess.phone'), type: 'success', showClose: true })
      break
    case typeEnum.Enum.email:
      ElMessage({ message: t('forgotPassword.sendSuccess.email'), type: 'success', showClose: true })
      break
  }
}

const schema = computed<FormKitSchemaNode[]>(() => {
  return {
    [typeEnum.Enum.phone]: [
      { $formkit: 'radio', name: 'currentTab', options: data.tabs, classes: { fieldset: 'hide' } },
      {
        $formkit: 'textWithBtn',
        name: 'account',
        label: '$text.account',
        validationLabel: '$text.account',
        validation: '$validation.account',
        btnText: '$text.getCode',
        onBtnClick: '$sendVerifyCode',
      },
      { $formkit: 'text', name: 'verifyCode', label: '$text.verifyCode', validationLabel: '$text.verifyCode', validation: '$validation.verifyCode', inputmode: 'numeric', autocomplete: 'off' },
      { $el: 'p', attrs: { class: 'f:14 fg:G-40' }, children: '$text.desc' },
      { $formkit: 'submit', classes: { input: 'w:full! mt:8x! f:bold' }, children: '$text.submit' },
    ],
    [typeEnum.Enum.email]: [
      { $formkit: 'radio', name: 'currentTab', options: data.tabs, classes: { input: 'hide' } },
      { $formkit: 'text', name: 'account', label: '$text.account', validationLabel: '$text.account', validation: '$validation.account' },
      { $el: 'p', attrs: { class: 'f:14 fg:G-40' }, children: '$text.desc' },
      { $formkit: 'submit', classes: { input: 'w:full! mt:8x! f:bold' }, children: '$text.submit' },
    ],
  }[formData.currentTab]
})

const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (_formData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  switch (formData.currentTab) {
    case typeEnum.Enum.phone:
      ElMessage({ message: 'phone success', type: 'success', showClose: true })
      break
    case typeEnum.Enum.email:
      ElMessage({ message: t('forgotPassword.sendSuccess.email'), type: 'success', showClose: true })
      break
  }
})
</script>

<template>
  <NuxtLayout name="mobile">
    <template #title>{{ $t('forgotPassword.title') }}</template>
    <template #header>
      <!-- 頁籤 -->
      <Tabs v-model="formData.currentTab" :tabs="data.tabs" @update:modelValue="getNode('form')!.at('currentTab')!.input($event)"></Tabs>
    </template>
    <!-- 表單 -->
    <FormKit id="form" v-slot="{ value }" v-model="formData" type="form" :actions="false" :plugins="[zodPlugin]" @submit="submitHandler">
      <FormKitSchema :schema="schema" :data="schemaData"></FormKitSchema>
      <pre>{{ value }}</pre>
    </FormKit>
  </NuxtLayout>
</template>
