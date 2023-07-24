<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - OMO` : 'OMO'
  },
})

const route = useRoute()
const { locale } = useI18n()
</script>

<template>
  <div>
    <slot name="nav">
      <form>
        <select v-model="locale">
          <option value="zh">zh</option>
          <option value="en">en</option>
        </select>
      </form>
      <div>
        Current route: <code>{{ route.path }}</code>
      </div>
      <NuxtLink to="/login">Login</NuxtLink>
    </slot>
    <div class="mx:auto p:1x max-w:xl bg:white">
      <slot />
    </div>
    <slot name="footer"> </slot>
  </div>
</template>
