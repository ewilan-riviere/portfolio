<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

const props = defineProps<{
  technology?: string
  forceWhite?: boolean
}>()

const current = ref<Technology>()
const color = ref('#ffffff')
const hoverColor = ref('#ffffff')

const technologyTitleColor = ref('black')
const technologyTitleColorDark = ref('white')

const getTechnology = () => {
  const { technologies } = useMainStore()
  current.value = technologies.find(
    (technology) => technology.slug === props.technology
  )
  color.value = current.value?.color ?? '#ffffff'
  hoverColor.value = !current.value?.isDark ? '#ffffff' : '#000000'
}
getTechnology()
if (props.forceWhite) {
  technologyTitleColor.value = 'white'
}
</script>

<template>
  <a
    v-if="current"
    :href="current.link"
    target="_blank"
    rel="noopener noreferrer"
    class="border rounded-full py-0.5 px-2 m-1 flex items-center space-x-1 skill text-sm"
  >
    <span class="w-2 h-2 rounded-full tag-color" />
    <span class="skill-title">{{ current?.title }}</span>
  </a>
</template>

<style lang="css" scoped>
.skill {
  @apply transition-colors duration-100;
  border-color: v-bind(color);
  color: '#ffffff';

  & .tag-color {
    @apply transition-colors duration-100;
    background-color: v-bind(color);
  }

  .skill-title {
    color: v-bind(technologyTitleColor);
  }
}

.dark {
  & .skill {
    & .skill-title {
      color: v-bind(technologyTitleColorDark);
    }
  }
}

.skill:hover {
  background-color: v-bind(color);
  color: v-bind(hoverColor);

  & .tag-color {
    background-color: v-bind(hoverColor);
  }

  & .skill-title {
    color: v-bind(hoverColor);
  }
}
</style>
