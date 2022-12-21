<script lang="ts" setup>
const bricks: string[] = []

for (let i = 1; i <= 25; i++) {
  const el = [i]
  bricks.push(`https://source.unsplash.com/random/${el}`)
}

const { fetchData } = useApi()
const projects = await fetchData<Project[]>('/api/projects')
</script>

<template>
  <div class="columns-2 md:columns-3 lg:columns-4">
    <!-- <img class="mb-4" src="https://source.unsplash.com/random/1"> -->
    <div
      v-for="url in bricks"
      :key="url"
    >
      <img
        class="mb-4"
        :src="url"
      >
      <!-- <app-img
        v-for="url in bricks"
        :key="url"
        class="mb-4"
        :src="url"
      /> -->
    </div>
  </div>
  <!-- <div class="columns-2 md:columns-3 lg:columns-4">
    <app-brick
      v-for="project in projects"
      :key="project.slug"
      :url="project.image"
    />
  </div> -->
</template>
