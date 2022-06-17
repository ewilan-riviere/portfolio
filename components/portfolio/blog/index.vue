<script lang="ts" setup>
import { useMainStore } from "~~/store/main"

// const { about } = useMainStore()
</script>

<template>
  <div class="main-container font-sans leading-6 text-slate-700">
    <div class="relative leading-6">
      <div class="">
        <portfolio-title-block
          title="We love writing"
          subtitle="Some tech articles"
        />
        <div class="grid relative mt-12 text-slate-700 lg:grid-cols-3 gap-4">
          <portfolio-blog-card
            v-for="(article, index) in 5"
            :key="index"
            :large="index === 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
