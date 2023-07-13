<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="base-icon" :class="icon" />
</template>
