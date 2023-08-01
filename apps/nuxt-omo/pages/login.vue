<script setup lang="tsx">
import type { FormKitNode, FormKitSchemaNode } from '@formkit/core'
import type { TransitionProps } from 'vue'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import { email_phone, email_phone_id } from '@zy-kit/config/formkit/rules'
import { cv_link } from '@zy-kit/master/styles/components/link'

import { Dialog, NuxtLink } from '#components'

// i18n
const { t } = useI18n()
const localePath = useLocalePath() // composable from 'vue-i18n-routing'

// Dialog
const createDialog = useCommandComponent(Dialog)

// 彈窗-立即加入OMO會員
let joinOMOModel: ReturnType<typeof createDialog>
onBeforeMount(() => {
  joinOMOModel = createDialog({
    visible: false,
    showClose: false,
    destroyOnClose: false,
    center: true,
    class: 'max-w:300',
    header: '提示',
    content: '即將離開此頁面並前往燦坤 OMO 會員轉移頁面 https://Tk3c@tt.com/2LlZ1n',
    confirmText: t('proceedToTransfer'),
    onConfirm: () => {
      ElMessage({ message: '導轉~~~', type: 'success', showClose: true })
    },
  })
})

interface ISchemaData {
  currentTab: 'omo' | 'old' | 'oldTransfer'
}
const data = reactive<ISchemaData>({
  currentTab: 'omo',
})

const zodSchema = z.object({
  account: z.custom((value) => {
    const formkitNode = { value } as FormKitNode
    return data.currentTab === 'omo' ? email_phone_id(formkitNode) : email_phone(formkitNode)
  }),
  password: z.string().min(6),
})
const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (_formData) => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  if (data.currentTab === 'omo') {
    ElMessage({ message: 'login success', type: 'success', showClose: true })
  } else {
    createDialog({
      showClose: false,
      destroyOnClose: false,
      center: true,
      class: 'max-w:300',
      header: t('omoMemberTransfer'),
      content: '舊版會員帳號將於2023年10月1日起無法使用，請會員們盡快完成帳號轉移，轉移完成可獲得100元折價卷。',
      cancelText: t('reconsider'),
      confirmText: t('proceedToTransfer'),
      onCancel: () => {
        ElMessage({ message: '導轉~~~', type: 'error', showClose: true })
      },
      onConfirm: () => {
        ElMessage({ message: '導轉~~~', type: 'success', showClose: true })
      },
    })
  }
})

// 表單相關
const library = markRaw({
  NuxtLink,
})

const schema = computed((): FormKitSchemaNode[] => {
  return [
    {
      $cmp: 'FormKit',
      props: {
        type: 'form',
        actions: false,
        plugins: [zodPlugin],
        onSubmit: submitHandler,
      },
      children: [
        {
          $formkit: 'text',
          name: 'account',
          label: data.currentTab === 'omo' ? t('omoAccount') : t('account'),
          validationLabel: data.currentTab === 'omo' ? t('omoAccount') : t('account'),
          validation: `required|${data.currentTab === 'omo' ? 'email_phone_id' : 'email_phone'}`,
        },
        {
          $formkit: 'password',
          name: 'password',
          label: t('password'),
          validationLabel: t('password'),
          validation: 'required|length:6',
        },
        {
          $el: 'div',
          attrs: { class: 'flex ai:start f:14' },
          children: [
            { $formkit: 'checkbox', name: 'rememberAccount', label: t('rememberAccount'), if: '$currentTab !== "oldTransfer"' },
            { $cmp: 'NuxtLink', props: { class: 'ml:auto link content:initial!:not(:hover):before fg:gray!', to: localePath('/forgotPassword') }, children: [`${t('forgotPassword.title')}?`] },
          ],
        },
        { $formkit: 'submit', classes: { input: 'w:full! mt:8x! f:bold' }, children: [data.currentTab !== 'oldTransfer' ? t('logIn') : t('proceedToTransfer')] },
      ],
    },
  ]
})

// 動畫相關
const direction: Record<typeof data.currentTab, '>' | '<'> = {
  omo: '<',
  old: '>',
  oldTransfer: '<',
}
const transitionBind = computed((): TransitionProps => {
  return {
    mode: 'out-in',
    enterActiveClass: '~all|.1s|ease-out',
    leaveActiveClass: '~all|.1s|ease-in',
    enterFromClass: `opacity:0 translateX(${direction[data.currentTab] === '>' ? -50 : 50})`,
    leaveToClass: `opacity:0 translateX(${direction[data.currentTab] === '>' ? 50 : -50})`,
  }
})
</script>

<template>
  <div class="card m:auto max-w:4xs">
    <CardHeader></CardHeader>
    <div class="pb:10x">
      <!-- 標籤 -->
      <div class="mb:6x h:40 flex center-content w:full>div">
        <Transition v-bind="transitionBind">
          <div v-if="data.currentTab !== 'oldTransfer'" class="tabs">
            <input id="tab1" v-model="data.currentTab" type="radio" value="omo" />
            <label for="tab1">{{ $t('omoMember') }}</label>
            <input id="tab2" v-model="data.currentTab" type="radio" value="old" />
            <label for="tab2">{{ $t('oldMember') }}</label>
            <span class="tabs-glider"></span>
          </div>
          <div v-else>
            <p class="subject f:20 f:bold">{{ $t('oldMemberTransfer') }}</p>
          </div>
        </Transition>
      </div>

      <!-- 表單 -->
      <FormKitSchema :schema="schema" :data="data" :library="library"></FormKitSchema>

      <!-- <div class="mt:6x flex jc:space-around f:bold t:center mr:0x_svg">
        <button class="btn btn-type--flat flex:1"><Icon name="fb" size="24"></Icon><span>Facebook</span></button>
        <span class="bl:1|G-20"></span>
        <button class="btn btn-type--flat flex:1"><Icon name="line" size="24"></Icon><span>Line</span></button>
      </div> -->

      <!-- 說明 -->
      <div class="mt:6x f:14 fg:G-40">
        <Transition v-bind="transitionBind">
          <div v-if="data.currentTab === 'omo'">
            <span>
              還不是會員?
              <NuxtLink class="link fg:Y-50! f:bold" @click="joinOMOModel.open()">{{ $t('joinOMONow') }}</NuxtLink>
            </span>
            <br />
            <span>
              如果是舊燦坤會員請先前往<NuxtLink class="link fg:Y-50! f:bold" @click.prevent="data.currentTab = 'oldTransfer'">{{ $t('oldMemberTransfer') }}</NuxtLink>
            </span>
            <br />
            <span>舊會員帳號將於2023年10月1日停止登入，轉移完成可獲得100元折價卷。</span>
          </div>
          <div v-else-if="data.currentTab === 'old'">
            <span>為有更好的使用體驗，舊版會員帳號將於2023年10月1日起無法使用，請會員們盡快完成帳號轉移，轉移完成可獲得100元折價卷。</span>
            <br />
            <NuxtLink class="link fg:Y-50! f:bold" @click.prevent="data.currentTab = 'oldTransfer'">{{ $t('oldMemberTransfer') }}</NuxtLink>
          </div>
          <div v-else-if="data.currentTab === 'oldTransfer'">
            <span>為有更好的使用體驗，舊版會員帳號將於2023年10月1日起無法使用，請會員們盡快完成帳號轉移，轉移完成可獲得100元折價卷。</span>
            <br />
            <div class="t:center mt:4x f:16 f:bold">
              <p :class="cv_link({ color: 'B-50' })" @click="data.currentTab = 'old'">{{ $t('oldMemberLogin') }}</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
