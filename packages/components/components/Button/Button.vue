<script setup lang="ts">
import cv from 'class-variant'

export interface Props {
  to?: string
  icon?: string
  intent?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  cls?: string
}

const props = withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'sm',
})

const btn = cv(
  'btn rounded',
  {
    intent: {
      primary: 'bg:blue fg:white bg:blue-55:hover',
      secondary: 'bg:white fg:slate-30 bg:slate-90:hover',
    },
    size: {
      sm: 'text:14 p:5|15',
      md: 'text:16 p:10|25',
    },
  },
  ({ indent, size }) => indent && size && 'font:semibold'
)

const btnCls = {
  intent: props.intent,
  size: props.size,
}
</script>

<template>
  <Component :is="to ? 'nuxt-link' : 'button'" :class="[btn(btnCls), cls]">
    <slot name="icon">
      <Icon v-if="icon" :icon="icon" class="button-icon" />
    </slot>
    <slot />
  </Component>
</template>
