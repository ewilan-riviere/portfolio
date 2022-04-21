<script setup lang="ts">
import { attributes } from '@/content/file.md'

console.log(attributes) //=> { title: 'Awesome Title', description: 'Describe this awesome content', tags: ['great', 'awesome', 'rad'] }
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
