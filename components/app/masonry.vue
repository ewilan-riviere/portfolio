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
  <div class="columns-2 md:columns-3">
    <app-brick
      v-for="url in bricks"
      :key="url"
      :src="url"
    />
  </div>
</template>
