<template>
  <div id="formationsTimeline" class="px-3">
    <v-timeline
      :dense="$vuetify.breakpoint.smAndDown"
      :class="{
        'mx-3': $vuetify.breakpoint.smAndDown,
        'w-80-screen': $vuetify.breakpoint.mdAndUp,
        'w-60-screen': $vuetify.breakpoint.lgAndUp
      }"
    >
      <v-timeline-item
        v-for="(formation, i) in formations"
        :key="i"
        large
        color="transparent"
        fill-dot
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="formation.logo" class="object-contain" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span class="white--text font-weight-bold title">
            {{ formation.title }}
          </span>
        </template>
        <v-card :color="formation.color">
          <v-card-title
            :class="{ 'white--text': formation.color_text_white }"
            class="title"
          >
            <a
              v-if="formation.place_link"
              :href="formation.place_link"
              :class="{ 'underline-white': formation.place_link }"
              class="invisible-link"
              target="_blank"
            >
              {{ formation.place }}
            </a>
            <span v-if="formation.promo" class="font-weight-bold px-2">
              ·
            </span>
            <a
              :href="formation.promo_link ? formation.promo_link : null"
              :class="{ 'underline-white': formation.promo_link }"
              class="invisible-link"
              target="_blank"
            >
              {{ formation.promo }}
            </a>
          </v-card-title>
          <v-card-text class="white text--primary pt-1">
            <v-card-subtitle class="px-0">
              <div>
                {{ formation.date_begin }} - {{ formation.date_end }}
                <span
                  v-if="!formation.finished"
                  class="font-weight-bold black--text text-uppercase"
                >
                  · en cours
                </span>
              </div>
              <div class="mt-2">
                {{ formation.level }}
              </div>
              <div v-if="formation.vocational" class="mt-2">
                École pour l'alternance :
                <b>
                  <a
                    v-if="formation.vocational_link"
                    :href="formation.vocational_link"
                    :class="{ 'underline-black': formation.vocational_link }"
                    class="invisible-link"
                    target="_blank"
                  >
                    {{ formation.vocational }}
                  </a>
                </b>
              </div>
            </v-card-subtitle>

            <p v-html="formation.resume" lang="fr" class="word-wraping"></p>
          </v-card-text>
          <div v-if="formation.project_title" class="formation-actions">
            <div
              :class="{ 'white--text': formation.color_text_white }"
              class="card-footer pt-4 pb-2 pl-4 font-weight-bold"
            >
              Réalisation majeure :
            </div>
            <v-card-actions class="d-flex px-3 py-3">
              <v-btn
                :href="
                  formation.project_link
                    ? formation.project_link
                    : formation.project_file
                "
                color="white"
                class="mr-5"
                text
                link
                target="_blank"
              >
                <span class="underline-white">
                  {{ formation.project_title }}
                </span>
                <v-icon small class="ml-2">mdi-open-in-new</v-icon>
              </v-btn>

              <custom-dialog
                v-if="formation.project_resume"
                :title="`Détails sur le projet : ${formation.project_title}`"
                :image="formation.project_image"
                :text="formation.project_resume"
              ></custom-dialog>
            </v-card-actions>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  props: {
    formations: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star'
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon'
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer'
      }
    ]
  })
}
</script>

<style lang="scss">
#formationsTimeline {
  //   background-color: white;
}
.w-60-screen {
  width: 60vw;
}
.w-80-screen {
  width: 80vw;
}
</style>
