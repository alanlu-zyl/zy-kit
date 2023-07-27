<script setup lang="tsx">
import type { FormKitNode } from '@formkit/core'
import type { ZodTypeAny } from 'zod'
import type { TransitionProps } from 'vue'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import { email_phone } from '@zy-kit/config/formkit/rules'
import { $, toLine } from '@zy-kit/utils/mcss'
import { Dialog } from '#components'

const createDialog = useCommandComponent(Dialog)

// 表單相關
const zodSchema: ZodTypeAny = z.object({
  account: z.custom((value) => email_phone({ value } as FormKitNode)),
  password: z.string().min(6),
})
const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  createDialog({
    component: () => (
      <div>
        <p>account: {formData.account}</p>
        <p>password: {formData.password}</p>
      </div>
    ),
  })
})

const { t } = useI18n()

const formSchema = computed(() => {
  return [
    {
      $formkit: 'text',
      name: 'account',
      validation: 'required|email_phone',
      validationLabel: t('account'),
      placeholder: t('account'),
    },
    {
      $formkit: 'password',
      name: 'password',
      validation: 'required|length:6',
      validationLabel: t('password'),
      placeholder: t('password'),
    },
  ]
})

/*
<FormKit type="text" name="account" validation="required|email_phone" :validation-label="$t('account')" :placeholder="$t('account')"></FormKit>
<FormKit type="password" name="password" validation="required|length:6" :validation-label="$t('password')" :placeholder="$t('password')"></FormKit>
<div class="flex ai:start f:14">
  <FormKit v-show="values.currentTab !== 'oldTransfer'" type="checkbox" name="rememberAccount" :label="$t('rememberAccount')"></FormKit>
  <nuxt-link to="#" class="ml:auto link content:initial!:not(:hover):before fg:gray!">{{ $t('forgotPassword') }}</nuxt-link>
</div>

<template v-if="values.currentTab !== 'oldTransfer'">
  <FormKit :classes="{ input: 'w:full! mt:4x! f:bold' }" type="submit">{{ $t('logIn') }}</FormKit>
</template>
<template v-else>
  <FormKit :classes="{ input: 'w:full! mt:4x! f:bold' }" type="submit">{{ $t('immediateTransfer') }}</FormKit>
</template>

*/

const values = reactive<{ currentTab: 'omo' | 'old' | 'oldTransfer' }>({
  currentTab: 'omo',
})

// 動畫相關
const direction: Record<typeof values.currentTab, '>' | '<'> = {
  omo: '<',
  old: '>',
  oldTransfer: '<',
}
const transitionBind = computed((): TransitionProps => {
  return {
    mode: 'out-in',
    enterActiveClass: '~all|.1s|ease-out',
    leaveActiveClass: '~all|.1s|ease-in',
    enterFromClass: `opacity:0 translateX(${direction[values.currentTab] === '>' ? -50 : 50})`,
    leaveToClass: `opacity:0 translateX(${direction[values.currentTab] === '>' ? 50 : -50})`,
  }
})

let joinOMOModel: ReturnType<typeof createDialog>

onBeforeMount(() => {
  joinOMOModel = createDialog({
    visible: false,
    showClose: false,
    destroyOnClose: false,
    customClass: toLine({
      '': $`max-w:300`,
      '>header': $`p:2x|2x|0 m:0`,
      '>div': $`p:1x|2x!`,
      '>footer_.btn': $`min-w:100`,
    }),
    center: true,
    header: '提示',
    content: '即將離開此頁面並前往燦坤 OMO 會員轉移頁面 https://Tk3c@tt.com/2LlZ1n',
  })
  joinOMOModel.mount()
})
</script>

<template>
  <div class="card m:auto max-w:4xs">
    <div class="rel t:center z:1">
      <Icon name="TkIcon" size="90" />
      <div class="abs-center-x z:-1">
        <div class="abs top:-435 left:-260 bg:#FFC600 round 445x406 opacity:.2"></div>
        <div class="abs top:-415 left:-40 bg:#FFC600 round 342x342 opacity:.2"></div>
      </div>
    </div>
    <div class="pb:5x">
      <div class="h:40 flex center-content w:full>div">
        <Transition v-bind="transitionBind">
          <div v-if="values.currentTab !== 'oldTransfer'" class="tabs">
            <input id="radio-1" v-model="values.currentTab" type="radio" value="omo" />
            <label for="radio-1">{{ $t('omoMember') }}</label>
            <input id="radio-2" v-model="values.currentTab" type="radio" value="old" />
            <label for="radio-2">{{ $t('oldMember') }}</label>
            <span class="tabs-glider"></span>
          </div>
          <div v-else>
            <p class="subject f:20 f:bold">{{ $t('oldMemberTransfer') }}</p>
          </div>
        </Transition>
      </div>
      <div class="mt:3x">
        <FormKit type="form" :actions="false" :plugins="[zodPlugin]" @submit="submitHandler">
          <FormKitSchema :schema="formSchema"></FormKitSchema>
        </FormKit>
      </div>

      <div class="mt:3x flex jc:space-around f:bold t:center mr:0x_svg">
        <button class="btn btn-type--flat flex:1"><Icon name="fb" size="24"></Icon><span>Facebook</span></button>
        <span class="bl:1|G-20"></span>
        <button class="btn btn-type--flat flex:1"><Icon name="line" size="24"></Icon><span>Line</span></button>
      </div>

      <div class="mt:3x f:14 fg:G-40">
        <Transition v-bind="transitionBind">
          <div v-if="values.currentTab === 'omo'">
            <span>
              還不是會員?
              <nuxt-link to="#" class="link fg:Y-50! f:bold" @click="joinOMOModel.open()">{{ $t('joinOMONow') }}</nuxt-link>
            </span>
            <br />
            <span>
              如果是舊燦坤會員請先前往<nuxt-link to="#" class="link fg:Y-50! f:bold" @click.prevent="values.currentTab = 'oldTransfer'">{{ $t('oldMemberTransfer') }}</nuxt-link>
            </span>
            <br />
            <span>舊會員帳號將於2023年10月1日停止登入，轉移完成可獲得100元折價卷。</span>
          </div>
          <div v-else-if="values.currentTab === 'old'">
            <span>為有更好的使用體驗，舊版會員帳號將於2023年10月1日起無法使用，請會員們盡快完成帳號轉移，轉移完成可獲得100元折價卷。</span>
            <br />
            <nuxt-link to="#" class="link fg:Y-50! f:bold" @click.prevent="values.currentTab = 'oldTransfer'">{{ $t('oldMemberTransfer') }}</nuxt-link>
          </div>
          <div v-else-if="values.currentTab === 'oldTransfer'">
            <span>為有更好的使用體驗，舊版會員帳號將於2023年10月1日起無法使用，請會員們盡快完成帳號轉移，轉移完成可獲得100元折價卷。</span>
            <br />
            <div class="t:center mt:2x f:16 f:bold">
              <nuxt-link to="#" class="link fg:B-30!" @click="values.currentTab = 'old'">{{ $t('oldMemberLogin') }}</nuxt-link>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
