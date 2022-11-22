<script lang="ts" setup>
const bricks: string[] = []

for (let i = 1; i <= 25; i++) {
  const el = [i]
  bricks.push(`https://source.unsplash.com/random/${el}`)
}
</script>

<template>
  <div class="columns-2 md:columns-3 lg:columns-4">
    <app-brick
      v-for="brick in bricks"
      :key="brick"
      :url="brick"
    />
  </div>
</template>
