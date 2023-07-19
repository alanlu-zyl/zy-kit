<script setup lang="ts">
definePageMeta({
  title: 'Input',
})

const input = useState('input', () => '')
</script>

<template>
  <div>
    <h2>[Input]</h2>
    <Input v-model="input"></Input>
    <div>{{ input }}</div>
  </div>
</template>
