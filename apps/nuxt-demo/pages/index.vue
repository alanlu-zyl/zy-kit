<script setup lang="ts">
import { storeToRefs } from 'pinia'

definePageMeta({
  title: 'My home page',
})

const route = useRoute()
console.log(route.meta.title)

const appConfig = useAppConfig()

const { $hello } = useNuxtApp()

// console.log(toRaw(runtimeConfig))
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public
const { data } = await useFetch(`${apiBase}/hello`)

const counterStore = useCounterStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { count, doubleCount } = storeToRefs(counterStore)
// the increment action can just be destructured
const { increment, decrement } = counterStore
</script>

<template>
  <div>
    <h2>Home</h2>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <h1>New Character</h1>

    {{ $hello('world') }}
    {{ appConfig.theme }}

    <div class="my-24 flex flex-col items-center">
      <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
      <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }}</p>
    </div>

    <figure>
      <nuxt-picture src="/images/mountains.jpg" width="3750" height="2500" sizes="xs:200px md:500px lg:1024" />
      <figcaption class="text-center text-gray-600 text-xs mt-3">
        Photo by <a href="https://unsplash.com/@kydroon" target="_blank" class="underline">Kurt Cotoaga</a> on
        <a href="https://unsplash.com/s/photos/mountain" target="_blank" class="underline">Unsplash</a>
      </figcaption>
    </figure>
  </div>
</template>
