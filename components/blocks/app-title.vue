<template>
  <div class="mx-auto sm:px-6 lg:px-8 mb-16 mt-10">
    <div :class="titlePosition">
      <p
        v-if="eyebrow"
        class="text-base font-semibold text-primary-600 tracking-wide uppercase"
      >
        {{ $t(eyebrow) }}
      </p>
      <h2
        v-if="title"
        class="
          mt-1
          text-3xl
          font-semibold
          text-gray-900
          dark:text-gray-100
          sm:text-4xl sm:tracking-tight
          lg:text-5xl
          title-font
        "
      >
        {{ $t(title) }}
      </h2>
      <p
        v-if="text"
        :class="textPosition"
        class="max-w-xl mt-5 text-xl text-gray-500"
      >
        {{ $t(text) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    title: {
      type: String,
      default: null,
    },
    eyebrow: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: 'left',
      validator: (val) => ['left', 'center', 'right'].includes(val),
    },
  },
  computed: {
    titlePosition() {
      const positions = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        default: 'text-left',
      }
      return positions[this.position] || positions.default
    },
    textPosition() {
      const positions = {
        left: '',
        center: 'mx-auto',
        right: '',
        default: '',
      }
      return positions[this.position] || positions.default
    },
  },
}
</script>
