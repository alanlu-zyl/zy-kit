<script setup lang="ts">
import type { FormKitNode } from '@formkit/core'
import type { ZodTypeAny } from 'zod'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import { email_phone } from '@zy-kit/config/formkit/rules'

const zodSchema: ZodTypeAny = z.object({
  account: z.custom((value) => email_phone({ value } as FormKitNode)),
  password: z.string().min(6),
})

const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (formData) => {
  // fake submit handler, but this is where you
  // do something with your valid data.
  await new Promise((resolve) => setTimeout(resolve, 2000))
  alert('Form was submitted!')
  console.log(formData)
})

const values = reactive<{ currentTab: 'omo' | 'old' | 'oldTransfer' }>({
  currentTab: 'omo',
})
</script>

<template>
  <div class="card m:auto max-w:3xs">
    <div class="rel t:center z:1">
      <Icon name="TkIcon" size="90" />
      <div class="abs-center-x z:-1">
        <div class="abs top:-435 left:-260 bg:#FFC600 round 445x406 opacity:.2"></div>
        <div class="abs top:-415 left:-40 bg:#FFC600 round 342x342 opacity:.2"></div>
      </div>
    </div>

    <div class="pb:5x">
      <template v-if="values.currentTab !== 'oldTransfer'">
        <div class="tabs">
          <input id="radio-1" v-model="values.currentTab" type="radio" value="omo" />
          <label for="radio-1">{{ $t('omoMember') }}</label>
          <input id="radio-2" v-model="values.currentTab" type="radio" value="old" />
          <label for="radio-2">{{ $t('oldMember') }}</label>
          <span class="tabs-glider"></span>
        </div>
      </template>
      <template v-else>
        <div class="rel">
          <p class="subject f:20 f:bold my:4x">{{ $t('oldMemberTransfer') }}</p>
          <Icon name="akar-icons:arrow-back-thick-fill" class="abs top:-100 right:0 z:1 fg:Y-50 cursor:pointer" @click="values.currentTab = 'omo'"></Icon>
        </div>
      </template>

      <div class="modal" open>
        <div class="modal-dialog">
          <div class="modal-close">X</div>
          <div class="dialog-content">
            <div class="dialog-title">{{ $t('omoMemberTransfer') }}</div>
            <div class="dialog-body">
              <p>舊版會員帳號將於2023年10月1日起無法使用， 請會員們盡快完成帳號轉移，轉移完成可獲得100元折價卷。</p>
            </div>
            <div class="dialog-footer">
              <button>再考慮</button>
              <button>前往轉移</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt:3x">
        <FormKit type="form" :actions="false" :plugins="[zodPlugin]" @submit="submitHandler">
          <FormKit type="text" name="account" validation="required|email_phone" :validation-label="$t('account')" :placeholder="$t('account')"></FormKit>
          <FormKit type="password" name="password" validation="required|length:6" :validation-label="$t('password')" :placeholder="$t('password')"></FormKit>
          <div class="flex ai:start jc:space-between f:14">
            <FormKit type="checkbox" name="rememberAccount" :label="$t('rememberAccount')"></FormKit>
            <nuxt-link to="#" class="link content:initial!:not(:hover):before fg:gray!">{{ $t('forgotPassword') }}</nuxt-link>
          </div>

          <template v-if="values.currentTab !== 'oldTransfer'">
            <FormKit :classes="{ input: 'w:full! mt:4x! f:bold' }" type="submit">{{ $t('logIn') }}</FormKit>
          </template>
          <template v-else>
            <FormKit :classes="{ input: 'w:full! mt:4x! f:bold' }" type="submit">{{ $t('immediateTransfer') }}</FormKit>
          </template>
        </FormKit>
      </div>

      <div class="mt:3x flex jc:space-around f:bold t:center mr:0x_svg">
        <button class="btn btn-type--flat flex:1"><Icon name="fb" size="24"></Icon><span>Facebook</span></button>
        <span class="bl:1|solid|G-20"></span>
        <button class="btn btn-type--flat flex:1"><Icon name="line" size="24"></Icon><span>Line</span></button>
      </div>

      <div class="mt:3x f:14 fg:G-40">
        <Transition
          mode="out-in"
          enter-active-class="~all|.15s|ease-out"
          leave-active-class="~all|.15s|ease-in"
          :enter-from-class="`opacity:0 translateX(${values.currentTab === 'omo' ? 50 : -50})`"
          :leave-to-class="`opacity:0 translateX(${values.currentTab === 'omo' ? -50 : 50})`"
        >
          <div v-if="values.currentTab === 'omo'">
            <span>
              還不是會員? <nuxt-link to="#" class="link fg:Y-50! f:bold">{{ $t('joinOMONow') }}</nuxt-link>
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
              <nuxt-link to="#" class="link fg:B-30!">{{ $t('oldMemberLogin') }}</nuxt-link>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
