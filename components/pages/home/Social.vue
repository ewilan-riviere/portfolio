<template>
  <div id="social">
    <ul class="social-list">
      <li v-for="item in socials" :key="item.id" class="social-list-item">
        <icon
          :icon="item.icon"
          :link="item.link"
          :name="item.name"
          color=""
          add-class="icon"
        />
        <fa :icon="social(item.icon)" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import icon from '@/components/sub/Icon.vue'

export default {
  components: {
    icon
  },
  props: {
    socials: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    fas() {
      return fas
    }
  },
  methods: {
    social(icon) {
      // icon
    }
  }
}
</script>

<style lang="scss">
#social {
  color: $black;
  .icon {
    font-size: 5rem;
  }
  .social-list {
    padding-left: 0;
    list-style: none;
    .social-list-item {
      display: inline-block;
      margin: 0 0.3rem;
    }
  }
}
</style>
