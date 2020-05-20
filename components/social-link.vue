<template>
  <div id="social">
    <ul class="social-list">
      <li v-for="item in socials" :key="item.id" class="social-list-item">
        <a :href="item.link ? item.link : $apiAddress() + item.file">
          <icon-base :name="item.icon" variant="text-white"></icon-base>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SocialLink',
  props: {
    socials: {
      type: Array,
      default: () => [],
    },
  },
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
