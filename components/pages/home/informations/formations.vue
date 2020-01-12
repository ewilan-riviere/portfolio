<template>
  <div class="formations">
    <div>
      <h1 class="font-ames-croisees mb-4">
        {{ data.name }}
      </h1>
    </div>
    <swiper :config="swiperConfig" :with-pagination="true">
      <div v-for="(formation, id) in data.data" :key="id" class="swiper-slide">
        <v-card class="mx-auto formation-card">
          <v-img
            :src="formation.logo"
            :alt="formation.title"
            class="white--text align-end"
            height="200px"
          ></v-img>

          <v-card-title class="black--text d-block">
            <div>
              {{ formation.title }}
            </div>
            <div class="grey--text caption">
              ({{ formation.date_begin }} - {{ formation.date_end }})
              <span
                v-if="!formation.finished"
                class="font-weight-bold black--text text-uppercase"
              >
                · en cours
              </span>
            </div>
          </v-card-title>

          <v-card-subtitle v-if="formation.level" class="pb-3">
            {{ formation.level }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              {{ formation.resume }}
            </div>
            <div>
              <span v-if="formation.type === 'vocational'">
                École :
              </span>
              <a
                :href="formation.place_link"
                class="invisible-link"
                target="_blank"
              >
                {{ formation.place }}
              </a>
              <span v-if="formation.promo">
                <span class="font-weight-bold">·</span>
                <a
                  :href="formation.promo_link"
                  v-if="formation.promo_link"
                  class="invisible-link"
                  target="_blank"
                >
                  {{ formation.promo }}
                </a>
                <span v-else>
                  {{ formation.promo }}
                </span>
              </span>
            </div>
            <div v-if="formation.type === 'vocational'">
              <span>
                Entreprise :
              </span>
              <a
                :href="formation.vocational_link"
                class="invisible-link"
                target="_blank"
              >
                {{ formation.vocational_title }}
              </a>
            </div>
          </v-card-text>
          <div v-if="formation.project_title" class="formation-actions">
            <hr />
            <div class="card-footer pt-4 pb-2 font-weight-bold">
              Réalisation majeure :
            </div>
            <v-card-actions class="pt-1">
              <v-btn
                :href="
                  formation.project_link
                    ? formation.project_link
                    : formation.project_file
                "
                color="orange"
                text
                link
                target="_blank"
              >
                {{ formation.project_title }}
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Formations',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      swiperConfig: {
        spaceBetween: 30,
        speed: 600,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        breakpoints: {
          1600: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.formations {
  .card-footer {
    padding-right: 16px;
    padding-left: 16px;
  }
  .formation-card {
    height: 32rem;
    padding-bottom: 1rem;
    .formation-actions {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
}
</style>
