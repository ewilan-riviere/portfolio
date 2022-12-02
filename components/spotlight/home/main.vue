<script lang="ts" setup>
const { findAll } = useMarkdownContent()
const articles = findAll()
</script>

<template>
  <spotlight-layout-container>
    <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
      <div class="flex flex-col gap-16">
        <spotlight-articles-card v-for="article in articles" :key="article._id" :article="article" type="home" />
      </div>
      <div class="space-y-10 lg:pl-16 xl:pl-24">
        <spotlight-home-newsletter />
        <spotlight-home-history />
      </div>
    </div>
  </spotlight-layout-container>
</template>
