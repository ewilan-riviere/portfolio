<template>
  <div
    class="px-5 relative"
    @mouseenter="displaySocial"
    @mouseleave="hideSocial"
  >
    <a
      class="
        p-3
        text-gray-400
        hover:opacity-90
        block
        transition
        ease-in-out
        duration-300
        transform
        relative
        z-10
      "
      :href="social.link"
      target="_blank"
      rel="noopener noreferrer"
      :class="[
        display ? '-translate-x-full' : 'translate-x-0',
        `hover:icon-${social.icon}`,
      ]"
      :title="social.name"
      :style="`background-color: ${social.color}`"
    >
      <svg-icon
        :name="social.icon"
        :class="social.textColorReverse ? 'text-gray-900' : 'text-gray-100'"
        class="w-5 h-5"
      />
    </a>
    <div
      class="absolute w-3 right-14 top-0 bottom-0"
      :style="`background-color: ${social.color}`"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'SocialBlock',
  props: {
    social: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      display: false,
    }
  },
  methods: {
    displaySocial() {
      this.display = true
    },
    hideSocial() {
      setTimeout(() => {
        this.display = false
      }, 500)
    },
  },
}
</script>
