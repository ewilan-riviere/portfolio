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
    target: String,
    returnToTop: Boolean
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss"></style>
