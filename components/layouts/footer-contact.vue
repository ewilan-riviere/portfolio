<template>
  <v-footer padless class="black white--text">
    <v-container class="footer-container pa-2">
      <v-row>
        <v-col
          v-for="link in footerLinks"
          :key="link.id"
          :class="{ 'd-none d-md-block': link.responsive }"
          class="font-weight-bold text-center"
          cols="12"
          md="4"
        >
          <a :href="link.link" target="_blank" class="invisible-link">
            <v-icon color="white" class="icon-align"
              >mdi-{{ link.icon }}</v-icon
            >
            {{ link.content }}
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterContact',
  data() {
    return {
      footerLinks: [
        {
          icon: 'bag-personal',
          content: 'Backpack for Laravel',
          link: 'https://backpackforlaravel.com/',
          responsive: true
        },
        {
          icon: 'creative-commons',
          content: 'Ewilan Rivière, ' + new Date().getFullYear(),
          link: 'mailto:ewilan.riviere@gmail.com',
          responsive: false
        },
        {
          icon: 'github-circle',
          content: 'GitHub',
          link: 'https://github.com/ewilan-riviere',
          responsive: true
        }
      ]
    }
  }
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
