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

<style lang="scss"></style>
