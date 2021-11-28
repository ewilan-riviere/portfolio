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
      display: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.display = true
    }, 300)
  },
}
</script>
