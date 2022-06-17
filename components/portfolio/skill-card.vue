<script lang="ts" setup>
const props = defineProps<{
  skill?: string
}>()

const current = ref<Skill>()
const color = ref("#ffffff")
const hoverColor = ref("#ffffff")

const getSkill = async () => {
  const skills = await $fetch("/api/skills")
  current.value = skills.find((skill) => skill.slug === props.skill)
  color.value = current.value?.color ?? "#ffffff"
  hoverColor.value = !current.value?.isDark ? "#ffffff" : "#000000"
}
getSkill()
</script>

<template>
  <a
    v-if="current"
    :href="current.link"
    target="_blank"
    rel="noopener noreferrer"
    class="border rounded-full py-0.5 px-2 m-1 flex items-center space-x-1 skill"
  >
    <span class="w-3 h-3 rounded-full tag-color"></span>
    <span>{{ current?.title }}</span>
  </a>
</template>

<style lang="css" scoped>
.skill {
  @apply transition-colors duration-100;
  border-color: v-bind(color);
  color: "#ffffff";
  & .tag-color {
    @apply transition-colors duration-100;
    background-color: v-bind(color);
  }
}
.skill:hover {
  background-color: v-bind(color);
  color: v-bind(hoverColor);
  & .tag-color {
    background-color: white;
  }
}
</style>
