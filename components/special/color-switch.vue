<template>
  <span class="inline-flex items-center group">
    <button
      class="
        p-1
        transition-colors
        duration-100
        rounded-md
        hover:bg-gray-100 hover:bg-opacity-20
        focus:outline-none focus:ring-2 focus:ring-offset-2
      "
      title="Changer le mode"
      @click="switchColorMode"
    >
      <svg-icon
        :name="colorMode === 'dark' ? 'moon' : 'sun'"
        :class="size"
        class="transition-transform duration-100"
      />
    </button>
  </span>
</template>

<script>
export default {
  name: 'ColorSwitch',
  props: {
    size: {
      type: String,
      default: 'w-10 h-10',
    },
  },
  data() {
    return {
      colorMode: 'light',
    }
  },
  watch: {
    colorMode(newCount, oldCount) {
      this.colorMode = this.$colorMode.preference
    },
  },
  mounted() {
    this.colorMode = this.$colorMode.preference
  },
  methods: {
    switchColorMode() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
      this.colorMode = this.$colorMode.preference
    },
  },
}
</script>

<style lang="postcss" scoped>
.toggle {
  @apply h-6 w-11;
  /* height: 1.5rem; */
  /* width: 2.7rem; */
}
.toggle-inner {
  @apply h-5 w-5;
}
.icon-color {
  @apply h-4 w-4;
}
</style>
