<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

const { projects, historyItems } = useMainStore()
const { findAll } = useMarkdownContent()
const articles = findAll()
</script>

<template>
  <div>
    <home-hero title="Software designer, founder, and amateur astronaut." />
    <home-gallery :projects="projects" />
    <layout-container>
      <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div class="flex flex-col gap-16">
          <articles-card v-for="article in articles" :key="article._id" :article="article" type="home" />
        </div>
        <div class="space-y-10 lg:pl-16 xl:pl-24">
          <home-newsletter />
          <home-history />
        </div>
      </div>
    </layout-container>
  </div>
</template>

<style scoped></style>
