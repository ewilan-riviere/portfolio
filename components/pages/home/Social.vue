<template>
  <div id="social">
    <ul class="social-list">
      <li v-for="item in social" :key="item.id" class="social-list-item">
        <icon
          :icon="item.icon"
          :link="item.link"
          :name="item.name"
          color=""
          add-class="icon"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import icon from '@/components/sub/Icon.vue'

export default {
  components: {
    icon
  },
  data() {
    return {
      social: this.$store.state.api.socials.data
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
