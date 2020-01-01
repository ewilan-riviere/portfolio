<template>
  <div class="formations">
    <v-container class="grey lighten-5" fluid>
      <div>
        <h1 class="font-ames-croisees mb-4">
          {{ data.name }}
        </h1>
      </div>
      <v-row dense>
        <v-col
          v-for="formation in data.data"
          :key="formation.id"
          cols="12"
          xl="3"
          lg="3"
          md="6"
          sm="12"
        >
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
          <!-- <v-card class="ma-2">
            <div v-if="formation.logo">
              <a :href="formation.title_link" v-if="formation.title_link">
                <v-img
                  :src="formation.logo"
                  :alt="formation.title"
                  class=""
                ></v-img>
                {{ formation.title }}
              </a>
              <span v-else>
                <v-img
                  :src="formation.logo"
                  :alt="formation.title"
                  class=""
                ></v-img>
                {{ formation.title }}
              </span>
              <span>
                ({{ formation.date_begin }} - {{ formation.date_end }})
              </span>
            </div>
            <div v-if="formation.level">Bac+{{ formation.level }}</div>
            <div>
              <a :href="formation.place_link">
                {{ formation.place }}
              </a>
              <span v-if="formation.promo">
                &nbsp;·&nbsp;
                <a :href="formation.promo_link">
                  {{ formation.promo }}
                </a>
              </span>
            </div>
            <div>
              <a :href="formation.project_link">
                {{ formation.project }}
              </a>
            </div>
          </v-card> -->
        </v-col>
      </v-row>
    </v-container>
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
