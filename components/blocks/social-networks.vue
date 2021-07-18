<template>
  <transition name="fade">
    <div
      v-if="display"
      class="hidden lg:block fixed z-40 bottom-0 transform right-0"
    >
      <a
        v-for="social in $store.state.socialLinks"
        :key="social.id"
        class="
          p-3
          text-gray-400
          transition-colors
          duration-300
          hover:opacity-90
          block
        "
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        :class="`hover:icon-${social.icon}`"
        :title="social.name"
        :style="`background-color: ${social.color}`"
      >
        <svg-icon
          :name="social.icon"
          :class="social.textColorReverse ? 'text-gray-900' : 'text-gray-100'"
          class="w-5 h-5"
        />
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SocialNetworks',
  data() {
    return {
      display: false,
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
