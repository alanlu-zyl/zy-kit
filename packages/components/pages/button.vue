<script setup lang="ts">
definePageMeta({
  title: 'Button',
})
</script>

<template>
  <div>
    <h2>[Button]</h2>
    <Button>Button</Button>
    <LazyButton>LazyButton</LazyButton>
    <ClientOnly>
      <Button>ClientOnly</Button>
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading button...</p>
      </template>
    </ClientOnly>
  </div>
</template>
