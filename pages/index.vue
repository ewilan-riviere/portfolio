<template>
  <v-layout column justify-center align-center>
    <div class="index-height">
      <GitHubRibbon />
      <EwilanIntro />
    </div>
  </v-layout>
</template>

<script>
import EwilanIntro from '@/components/EwilanIntro.vue'
import GitHubRibbon from '@/components/subcomponents/GitHubRibbon.vue'

export default {
  components: {
    EwilanIntro,
    GitHubRibbon
  },
  data() {
    return {
      title: 'NuxtJS',
      subtitle: 'Ewilan Rivière Portfolio',
    }
  }
}
</script>

<style lang="scss">
.index-height {
  // height: 150vh;
}
</style>
