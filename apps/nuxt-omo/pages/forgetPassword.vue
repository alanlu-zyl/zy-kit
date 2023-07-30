<script setup lang="ts">
import type { FormKitNode, FormKitSchemaNode } from '@formkit/core'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import { email, phone } from '@zy-kit/config/formkit/rules'

const { form, context } = useFormKitRefs()

definePageMeta({
  layout: 'mobile',
  title: '忘記密碼',
})

const { t } = useI18n()

interface ISchemaData {
  currentTab: 'phone' | 'email'
}

const data = reactive<ISchemaData>({
  currentTab: 'phone',
})

interface IFormData {
  account: string
  verifyCode: string
}
const formData = reactive<IFormData>({
  account: '',
  verifyCode: '',
})

const zodSchema = z.object({
  account: z.custom((value) => {
    const formkitNode = { value } as FormKitNode
    return data.currentTab === 'phone' ? phone(formkitNode) : email(formkitNode)
  }),
  verifyCode: z.string().min(6),
})

const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (_formData) => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  if (data.currentTab === 'phone') {
    ElMessage({ message: 'login success', type: 'success', showClose: true })
  } else {
    //
  }
})

function sendSMS() {
  // TODO
  console.log(form.value!.node.store)
  try {
    const account = zodSchema.pick({ account: true }).parse({ account: context.value?.value.account })
    console.log(account)
  } catch (error) {
    ElMessage({ message: error.message, type: 'error', showClose: true })
  }
}

const schema = computed((): FormKitSchemaNode[] => {
  return [
    {
      $formkit: 'text',
      name: 'account',
      label: data.currentTab === 'phone' ? t('phoneNumber') : t('email'),
      validationLabel: data.currentTab === 'phone' ? t('phoneNumber') : t('email'),
      validation: data.currentTab === 'phone' ? 'required|phone' : 'required|email',
      sectionsSchema: {
        suffix: {
          $el: 'div',
          attrs: { class: "rel {abs-center-y;left:0;content:'';bl:1|G-30;h:70%}::before" },
          children: [
            {
              $el: 'button',
              attrs: {
                type: 'button',
                class: 'btn btn-type--flat r:0! py:3x!',
                onClick: sendSMS,
              },
              children: [t('getVerifyCode')],
            },
          ],
        },
      },
    },
    {
      $formkit: 'text',
      name: 'verifyCode',
      validation: 'required|length:6',
      inputmode: 'numeric',
      autocomplete: 'off',
      label: t('verifyCode'),
      validationLabel: t('verifyCode'),
    },
    {
      $el: 'p',
      attrs: {
        class: 'f:14 fg:G-40',
      },
      children: [`請輸入註冊時的${data.currentTab === 'phone' ? t('phoneNumber') : t('email')}，我們將會寄發驗證碼給您，如需協助請洽客服或門市。`],
    },
    { $formkit: 'submit', classes: { input: 'w:full! mt:8x! f:bold' }, children: [t('nextStep')] },
  ]
})
</script>

<template>
  <div>
    <div class="h:40 flex center-content w:full>div">
      <div class="tabs $glider-w:100%">
        <input id="radio-1" v-model="data.currentTab" type="radio" value="phone" />
        <label for="radio-1">{{ $t('phone') }}</label>
        <input id="radio-2" v-model="data.currentTab" type="radio" value="email" />
        <label for="radio-2">{{ $t('email') }}</label>
        <span class="tabs-glider"></span>
      </div>
    </div>
    <!-- 表單 -->
    <div class="mt:6x">
      <FormKit ref="form" v-model="formData" type="form" :actions="false" :plugins="[zodPlugin]" @submit="submitHandler">
        <FormKitSchema :schema="schema" :data="data"></FormKitSchema>
      </FormKit>
    </div>
  </div>
</template>
