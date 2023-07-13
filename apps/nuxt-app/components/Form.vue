<script setup lang="ts">
const input = ref<HTMLInputElement>()

onMounted(() => {
  input.value?.focus()
})
// watchEffect(() => {
//   if (input.value) {
//     input.value.focus()
//   } else {
//     console.log(123)
//     // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
//   }
// })
</script>

<template>
  <div><input ref="input" /></div>
</template>
