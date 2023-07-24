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
  <CSSProvider>
    <slot name="nav"> </slot>
    <div class="mx:auto p:1x max-w:xl bg:white">
      <slot />
    </div>
    <slot name="footer">
      <form>
        <select v-model="locale">
          <option value="zh">zh</option>
          <option value="en">en</option>
        </select>
      </form>
      <div>
        Current route: <code>{{ route.path }}</code>
      </div>
    </slot>
  </CSSProvider>
</template>
