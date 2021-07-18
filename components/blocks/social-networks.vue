<template>
  <transition name="fade">
    <div v-if="display" class="hidden lg:block fixed z-40 bottom-0 -right-14">
      <social-block
        v-for="social in $store.state.socialLinks"
        :key="social.id"
        :social="social"
      />
    </div>
  </transition>
</template>

<script>
import socialBlock from './social-block.vue'
export default {
  name: 'SocialNetworks',
  components: { socialBlock },
  data() {
    return {
      display: true,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 150) {
        this.display = true
      } else {
        this.display = false
      }
    },
  },
}
</script>
