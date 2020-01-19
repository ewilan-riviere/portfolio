<template>
  <div class="passions">
    <div>
      <h1 class="font-ames-croisees mb-4">
        {{ passions.name }}
      </h1>
    </div>
    <div class="d-flex flex-wrap justify-content-center">
      <v-container>
        <v-row>
          <div v-for="(passion, passionId) in passions.data" :key="passionId">
            <v-card class="ma-2" max-width="300">
              <!-- <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img> -->
              <v-card-title>
                {{ passion.name }}
              </v-card-title>
              <v-card-subtitle class="pb-0">
                {{ passion.text }}
              </v-card-subtitle>

              <!-- <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  Share
                </v-btn>

                <v-btn color="orange" text>
                  Explore
                </v-btn>
              </v-card-actions> -->
            </v-card>
          </div>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Passions',
  props: {
    passions: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.passions {
}
</style>
