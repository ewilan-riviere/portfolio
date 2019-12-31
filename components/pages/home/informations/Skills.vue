<template>
  <div>
    <ul>
      <li v-for="item in data.data" :key="item.id">
        <ul>
          <li>
            {{ item.title }}
          </li>
          <li>
            {{ item.category.category }}
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
