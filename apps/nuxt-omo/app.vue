<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'normal',
  },
})
useSeoMeta({
  title: 'App',
  ogTitle: 'App',
  description: 'description',
  ogDescription: 'description',
  // ogImage: 'https://example.com/image.png',
})
const route = useRoute()
const { locale } = useI18n()

const appConfig = useAppConfig()
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <template #nav>
      <p>{{ $t('hello') }}</p>
      <p>{{ $t('welcome') }}</p>
      <form>
        <select v-model="locale">
          <option value="zh">zh</option>
          <option value="en">en</option>
        </select>
      </form>
    </template>

    <Icon name="nuxt" />
    <Icon name="qqq" />

    <p>{{ JSON.stringify(appConfig) }}</p>

    <NuxtPage />

    <template #footer>
      <div>
        Current route: <code>{{ route.path }}</code>
        <button class="btn bg:red"></button>
      </div>
    </template>
  </NuxtLayout>
</template>

<style lang="scss">
:root {
  --zh-font-family: 'Noto Sans TC';
  --en-font-family: 'Inter';
}

body {
  font-family: var(--zh-font-family), var(--en-font-family);
}
</style>
