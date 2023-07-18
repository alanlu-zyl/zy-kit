<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap',
    },
  ],
})
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const route = useRoute()
const { locale } = useI18n()

const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig)

const appConfig = useAppConfig()
// console.log(appConfig)
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <template #nav>
      <nav class="flex align-center gap-4 p-4">
        <ElButton :icon="ElIconEditPen" type="success" @click="ElMessage('hello')">button</ElButton>
        <NuxtLink to="/" class="n-link-base"> Home </NuxtLink>
        <NuxtLink to="/about" class="n-link-base"> About </NuxtLink>
        <NuxtLink to="/parent" class="n-link-base"> Parent (index) </NuxtLink>
        <NuxtLink to="/parent/b" class="n-link-base"> Parent (b) </NuxtLink>
        <NuxtLink to="/demo" class="n-link-base"> Demo </NuxtLink>
        <NuxtLink to="/formkit" class="n-link-base"> formkit </NuxtLink>
        <button class="n-link-base" @click="$router.push(`/users-admin/reload-${(Math.random() * 100).toFixed()}`)">Keyed child</button>
        <button class="n-link-base" @click="$router.push(`/users-admin/static-${(Math.random() * 100).toFixed()}`)">Non-keyed child</button>
      </nav>
    </template>

    <NuxtPage />

    <template #footer>
      <div class="text-center p-4 op-50">
        <p class="rotate-me">{{ $t('welcome') }}</p>
        <form>
          <select v-model="locale">
            <option value="zh">zh</option>
            <option value="en">en</option>
          </select>
        </form>

        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>

        Current route: <code>{{ route.path }}</code>
      </div>
    </template>
  </NuxtLayout>
</template>

<style lang="scss">
html {
  font-family: Oxygen, sans-serif;
}

h2 {
  z-index: $z-index;
}

div {
  @extend %center-image;
  @include fluid-type(font-size, 320px, 1366px, 14px, 18px);

  color: rgb(0 0 0 / 80%);
  background-color: #fff;
}

.dark-mode body {
  color: #ebf4f1;
  background-color: #091a28;
}

.sepia-mode body {
  color: #433422;
  background-color: #f1e7d0;
}
</style>
