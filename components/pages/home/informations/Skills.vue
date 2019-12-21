<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
