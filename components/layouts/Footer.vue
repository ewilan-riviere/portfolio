<template>
  <v-footer padless class="green darken-4 white--text">
    <div class="footer-container d-flex justify-space-around w-100 pa-5">
      <div class="font-weight-bold">
        <a
          href="https://backpackforlaravel.com/"
          target="_blank"
          class="invisible-link"
        >
          <v-icon color="white" class="icon-align">mdi-bag-personal</v-icon>
          Backpack for Laravel
        </a>
      </div>
      <div class="font-weight-bold">
        <v-icon color="white" class="icon-align">mdi-creative-commons</v-icon>
        <a href="mailto:ewilan.riviere@gmail.com" class="invisible-link">
          Ewilan Rivière</a
        >, {{ new Date().getFullYear() }}
      </div>
      <div>
        <a
          href="https://github.com/ewilan-riviere/ewilan-riviere-portfolio-front"
          target="_blank"
          class="invisible-link"
        >
          <v-icon color="white" class="icon-align">mdi-github-circle</v-icon>
          GitHub
        </a>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  .icon-align {
    margin-bottom: 0.2rem;
  }
}
</style>
