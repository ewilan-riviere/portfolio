<script setup lang="ts">
const { isDev } = useDev()

useMetadata()
</script>

<template>
  <div>
    <portfolio-hero />
    <portfolio-about />
    <portfolio-technologies-bg class="mt-3 mb-10" />
    <portfolio-features />
    <portfolio-project class="mt-16" />
    <portfolio-history class="mt-16" />
    <portfolio-blog v-if="isDev" class="mt-16" />
    <portfolio-form-contact class="mt-28" />
  </div>
</template>
