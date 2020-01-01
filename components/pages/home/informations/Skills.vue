<template>
  <div>
    <ul>
      <li v-for="category in data.data" :key="category.id">
        {{ category.category }}
        <ul>
          <li v-for="skill in category.skills" :key="skill.id">
            {{ skill.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
