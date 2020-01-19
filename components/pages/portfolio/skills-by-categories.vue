<template>
  <div class="skills">
    <v-container
      v-for="(category, categoryId) in categories"
      :key="categoryId"
      fluid
    >
      <h2 class="font-weight-bold subtitle-1">
        {{ category.display }}
      </h2>
      <v-row>
        <v-col
          v-for="skill in category.skills.data"
          :key="skill.id"
          cols="auto"
        >
          <v-card dark>
            <v-img
              :src="skill.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              width="210px"
            >
              <v-card-title v-text="skill.title"></v-card-title>
            </v-img>

            <v-card-text>
              <div>
                {{ skill.subtitle }}
              </div>
              <div v-if="skill.version">Version {{ skill.version }}</div>
              <div v-else>
                &nbsp;
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon :color="skill.is_favorite ? 'red' : ''"
                  >mdi-heart</v-icon
                >
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    categories: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
$card-width: 210px;
.skills {
  padding: 5rem 2rem 2rem 2rem;
  .v-card {
    min-height: 25rem;
    position: relative;
    &__text {
      width: $card-width;
    }
    &__actions {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
