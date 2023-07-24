<script setup lang="ts">
import type { FormKitSchemaDefinition } from '@formkit/core'
import type { ZodTypeAny } from 'zod'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'

const { t } = useI18n()

const schema: FormKitSchemaDefinition = [
  { $formkit: 'email', name: 'email', validation: 'required|email', placeholder: t('phoneEmail') },
  { $formkit: 'password', name: 'password', validation: 'required', placeholder: t('password') },
  { $el: 'div', attrs: { class: 't:right' }, children: [{ $el: 'a', attrs: { href: '#', class: 'link fg:gray!', text: t('forgotPassword') } }] },
]

const zodSchema: ZodTypeAny = z.object({
  email: z.string().email(),
  password: z.string(),
})

const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (formData) => {
  // fake submit handler, but this is where you
  // do something with your valid data.
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // alert('Form was submitted!')
  console.log(formData)
})
</script>

<template>
  <div class="card">
    <div class="rel t:center z:1">
      <Icon name="TkIcon" size="90" />
      <div class="abs-center-x z:-1">
        <div class="abs top:-435 left:-260 bg:#FFC600 round 445x406 opacity:.2"></div>
        <div class="abs top:-415 left:-40 bg:#FFC600 round 342x342 opacity:.2"></div>
      </div>
    </div>
    <div>
      <h3 class="subject">{{ $t('oldMemberTransfer') }}</h3>

      <div class="{w:full;mt:60}_[data-type='submit']_.formkit-input">
        <FormKit classes="{ wrapper:'bg:red!}" type="form" :plugins="[zodPlugin]" :submit-label="$t('immediateTransfer')" @submit="submitHandler">
          <FormKitSchema :schema="schema" />
          <!-- <pre wrap>{{ value }}</pre> -->
        </FormKit>
      </div>
      <div class="flex center-content gap:4x">
        <Icon name="bi:facebook" size="40" color="#1877F2"></Icon>
        <div class="40x40 bg:#06c755 round flex center-content">
          <Icon name="bi:line" size="24" color="white"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
