<script setup lang="ts">
import { Icon } from '#components'

const icon = ref('uil:github')

const MyIcon = h(Icon, { name: 'uil-twitter' })
</script>

<template>
  <div>
    <p>
      Icon name:
      <input v-model="icon" placeholder="Icon name" />
      <a href="https://icones.js.org/" target="_blank">icones.js.org</a>
    </p>
    <p>
      Different sizes:
      <Icon :name="icon" />
      <Icon :name="icon" size="24" />
      <Icon :name="icon" size="48" />
    </p>
    <p>
      Custom component:
      <Icon name="NuxtIcon" />
      <Icon name="NuxtIcon" size="24" />
      <Icon name="NuxtIcon" size="48" />
    </p>
    <p>
      Emoji:
      <Icon name="🚀" />
      <Icon name="🚀" size="24" />
      <Icon name="🚀" size="48" />
    </p>
    <p>
      Alias:
      <Icon name="nuxt" />
    </p>
    <p>Render function: <MyIcon /></p>
  </div>
</template>

<style scoped>
p {
  display: flex;
  gap: 1em;
  align-items: center;
}

input {
  padding: 5px 4px;
  border: 1px #ddd solid;
}
</style>
