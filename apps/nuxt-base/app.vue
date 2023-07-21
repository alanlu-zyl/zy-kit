<script setup lang="ts">
import type { FormKitSchemaDefinition } from '@formkit/core'
import type { ZodTypeAny } from 'zod'

import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'

useHead({
  bodyAttrs: {
    class: 'normal',
  },
})
useSeoMeta({
  title: 'App',
})

const schema: FormKitSchemaDefinition = [
  {
    $el: 'div',
    attrs: { class: 'flex gap:20' },
    children: [
      {
        $formkit: 'group',
        name: 'personalInfo',
        config: { classes: { outer: 'flex:0|0|50% flex-wrap:wrap' } },
        children: [
          { $formkit: 'text', name: 'firstName', label: 'First Name', validation: 'required|length:3,25', 'validation-visibility': 'live' },
          { $cmp: 'FormKit', props: { type: 'text', name: 'lastName', label: 'Last Name', validation: 'required|length:3,25' } },
        ],
      },
    ],
  },
  { $formkit: 'email', name: 'email', label: 'Your email', validation: 'required|email' },
  { $el: 'h1', attrs: { class: 'bg:gray-80' }, children: ['test'] },
  { $formkit: 'checkbox', name: 'arrayMin', label: 'Zod features', validation: 'required|min:2', options: ['Validation', 'Type-Safety', 'Reusability'] },
]

const zodSchema: ZodTypeAny = z.object({
  personalInfo: z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().min(3).max(25),
  }),
  email: z.string().email(),
  arrayMin: z.string().array().min(2),
})

const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (formData) => {
  // fake submit handler, but this is where you
  // do something with your valid data.
  await new Promise((resolve) => setTimeout(resolve, 2000))
  alert('Form was submitted!')
  console.log(formData)
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <h1 class="fg:brown">Validation from Zod schema</h1>
    <FormKit v-slot="{ value }" type="form" :plugins="[zodPlugin]" @submit="submitHandler">
      <FormKitSchema :schema="schema" />
      <pre wrap>{{ value }}</pre>
    </FormKit>

    <NuxtPage />
  </NuxtLayout>
</template>
