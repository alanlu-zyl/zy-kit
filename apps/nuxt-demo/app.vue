<script setup lang="ts">
const route = useRoute()

const appConfig = useAppConfig()

console.log(appConfig.theme)

const { $hello } = useNuxtApp()

console.log($hello('world'))

const { locale } = useI18n()

const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />

    <template #nav>
      <nav class="flex align-center gap-4 p-4">
        <el-button @click="ElMessage('hello')">button</el-button>
        <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
        <LazyElButton type="warning">lazy button</LazyElButton>
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
    <Icon name="nuxt" />
    <Icon name="uil:github" color="black" />
    <Icon name="🚀" />
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
