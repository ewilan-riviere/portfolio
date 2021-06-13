<template>
  <component
    :is="component"
    ref="btn"
    :to="to ? to : null"
    :target="href !== null ? '_blank' : null"
    :rel="href !== null ? 'noopener noreferrer' : null"
    :type="component === 'button' ? btnType : null"
    :class="[color, { disabled: disabled }, overrideClass]"
    class="btn"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: 'secondary',
      validator: (val) => ['secondary', 'purple', 'white'].includes(val),
    },
    href: {
      type: String,
      default: null,
    },
    to: {
      type: [String, Object],
      default: null,
    },
    // Only for true hackers & trickers
    overrideComponent: {
      type: String,
      default: null,
    },
    overrideClass: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    btnType: {
      type: String,
      default: 'button',
      validator: (val) => ['button', 'reset', 'submit'].includes(val),
    },
  },
  data() {
    return {
      component: 'button',
    }
  },
  created() {
    if (this.href !== null) {
      this.component = 'a'
    }
    if (this.to !== null) {
      this.component = 'nuxt-link'
    }
    if (this.overrideComponent) {
      this.component = this.overrideComponent
    }
  },
  mounted() {
    if (this.href) {
      const btn = this.$refs.btn
      btn.setAttribute('href', this.href)
    }
  },
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply inline-flex items-center px-4 py-2 text-base font-semibold rounded-md transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 border;
}
.secondary {
  @apply text-purple-600 bg-purple-100 border-transparent hover:bg-purple-200 hover:text-purple-600;
}
.purple {
  @apply border-transparent shadow-sm text-white bg-purple-600 hover:bg-purple-600;
}
.white {
  @apply border-gray-300 shadow-sm text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 hover:bg-purple-100;
}

.purple-disabled {
  @apply bg-purple-300 cursor-not-allowed !important;
}
</style>
