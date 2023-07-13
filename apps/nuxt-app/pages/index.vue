<script setup lang="ts">
definePageMeta({
  title: 'My home page',
})

const route = useRoute()

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

    <hr />
    <Comments />
    <hr />
    <button v-if="!show" @click="show = true">Show List</button>
    <LazyComments v-if="show" />

    <hr />
    <!-- This renders the "span" element on the server side -->
    <ClientOnly fallback-tag="span">
      <!-- this component will only be rendered on client side -->
      <Comments />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>

      <Form></Form>

      <Form></Form>
      <Form></Form>
    </ClientOnly>

    <hr />
  </div>
</template>
