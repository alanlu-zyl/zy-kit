<script setup lang="ts">
definePageMeta({
  title: 'Button',
})
</script>

<template>
  <div>
    <h2>[Button]</h2>
    <Button cls="m:50">Button</Button>
    <LazyButton>LazyButton</LazyButton>
    <ClientOnly>
      <Button intent="secondary">ClientOnly</Button>
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading button...</p>
      </template>
    </ClientOnly>
  </div>
</template>
