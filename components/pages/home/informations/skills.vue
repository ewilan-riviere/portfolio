<template>
  <div>
    <v-container fluid>
      <div>
        <h1 class="font-ames-croisees mb-4">
          {{ data.name }}
        </h1>
        <div class="font-italic mb-5">
          Les noms des compétences
          <b>en gras</b>
          <v-icon :size="10" color="warning" class="pb-3">
            mdi-star
          </v-icon>
          sont les compétences que j'apprécie
        </div>
      </div>
      <v-row>
        <v-col
          v-for="(category, categoryId) in data.data"
          :key="categoryId"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-card class="mx-auto" max-width="400" tile>
            <v-subheader class="font-weight-bold subtitle-1">
              {{ category.display }}
            </v-subheader>
            <v-list-item
              v-for="(skill, skillId) in category.skills"
              :key="skillId"
            >
              <v-list-item-content>
                <v-list-item-title
                  :class="skill.favorite ? 'font-weight-bold' : ''"
                >
                  {{ skill.title }}
                  <v-icon
                    :size="10"
                    v-if="skill.favorite"
                    color="warning"
                    class="pb-3"
                  >
                    mdi-star
                  </v-icon>
                </v-list-item-title>
                <v-list-item-subtitle class="font-italic mb-3">
                  {{ skill.subtitle }}
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  v-html="skill.details"
                  class="word-wraping"
                  lang="fr"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiStar } from '@mdi/js'

export default {
  name: 'Skills',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      star: mdiStar
    }
  }
}
</script>

<style lang="scss" scoped>
.v-list-item {
  &__content {
    overflow: visible;
  }
}
.v-list-item__subtitle {
  // -webkit-line-clamp: 3;
  white-space: normal;
}
</style>
