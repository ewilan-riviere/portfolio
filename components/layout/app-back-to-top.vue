<template>
  <transition name="fade">
    <div
      v-if="displayBackToTop"
      class="
        fixed
        bottom-0
        right-0
        z-20
        p-2
        mb-5
        mr-5
        transition-colors
        duration-300
        bg-gray-200 bg-opacity-50
        rounded-md
        shadow-md
        cursor-pointer
        md:p-3
        hover:bg-gray-300
        group
      "
      @click="scrollToTop"
    >
      <svg-icon
        name="chevron-right"
        class="
          block
          w-8
          h-8
          text-gray-700
          transition-colors
          duration-300
          transform
          group-hover:text-gray-700
        "
        style="transform: rotate(270deg)"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      displayBackToTop: false,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // scrollTo() {
    //   return window.scrollTo({
    //     bottom: document.querySelector('#__nuxt'),
    //     behavior: 'smooth',
    //   })
    // },
    handleScroll() {
      if (window.scrollY > 150) {
        this.displayBackToTop = true
      } else {
        this.displayBackToTop = false
      }
    },
    scrollToTop() {
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
