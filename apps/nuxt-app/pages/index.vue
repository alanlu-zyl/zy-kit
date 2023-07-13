<script setup lang="ts">
definePageMeta({
  title: 'My home page',
})

const count = ref(0)
const increment = () => count.value++

const show = ref(false)
</script>

<template>
  <div>
    <h1>Index page</h1>
    <hr />

    <div>{{ count }}</div>
    <button @click="increment">increment</button>

    <ZyButton>123</ZyButton>

    <hr />
    <ZyComments />
    <hr />
    <button v-if="!show" @click="show = true">Show List</button>
    <LazyZyComments v-if="show" />

    <hr />
    <!-- This renders the "span" element on the server side -->
    <ClientOnly fallback-tag="span">
      <!-- this component will only be rendered on client side -->
      <ZyComments />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>

      <ZyForm></ZyForm>

      <ZyForm></ZyForm>
      <ZyForm></ZyForm>
    </ClientOnly>

    <hr />
  </div>
</template>
