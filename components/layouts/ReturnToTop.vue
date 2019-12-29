<template>
  <div>
    <transition name="fade">
      <div v-if="returnToTop" class="view">
        <div @click="$vuetify.goTo(target)" class="return-to-top">
          <v-icon class="icon">
            mdi-chevron-up
          </v-icon>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: ''
    },
    returnToTop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.return-to-top {
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    color: lightgray;
    bottom: 1.5rem;
  }
}
</style>
