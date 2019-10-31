<template>
  <v-layout column justify-center align-center>
    <div class="index-height">
      <h3>
        {{ title }}
      </h3>
      <h4>
        {{ subtitle }}
      </h4>
      <EwilanLogo />
    </div>
  </v-layout>
</template>

<script>
import EwilanLogo from '@/components/EwilanLogo.vue'

export default {
  components: {
    EwilanLogo
  },
  data() {
    return {
      title: 'NuxtJS',
      subtitle: 'Ewilan Rivière Portfolio'
    }
  }
}
</script>

<style lang="scss">
  .index-height {
    // height: 150vh;
  }
</style>
