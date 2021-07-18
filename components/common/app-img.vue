<template>
  <div id="img" ref="appImgWrapper">
    <div class="relative h-full">
      <img v-if="imageNotExist" src="/icon.png" :alt="title" />
      <transition name="fade">
        <div
          v-if="loading"
          :style="`background-color: ${color}`"
          :class="picture"
          class="absolute inset-0 transition-transform duration-300 blur-sm"
        ></div>
      </transition>
      <img
        ref="appImgPicture"
        v-lazy-load
        :class="[loading ? '' : '', picture]"
        :data-src="$attrs['data-src']"
        :alt="noAlt ? '' : title"
        :title="title"
        class="h-full object-cover"
        @load="onImgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppImg',
  props: {
    src: {
      type: String,
      default: '/icon.png',
    },
    color: {
      type: String,
      default: '#632ebe',
    },
    title: {
      type: String,
      default: 'Image',
    },
    picture: {
      type: String,
      default: null,
    },
    noAlt: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: true,
      imageNotExist: false,
    }
  },
  created() {
    if (!this.src) {
      this.imageNotExist = true
    }
  },
  methods: {
    onImgLoad() {
      this.loading = false
    },
  },
}
</script>
