<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          @click.stop="projectResume = true"
          v-on="on"
          color="white"
          fab
          small
          outlined
          dark
        >
          <v-icon>mdi-text-subject</v-icon>
        </v-btn>
      </template>
      <span>Détails</span>
    </v-tooltip>

    <v-dialog v-model="projectResume" max-width="700">
      <v-card color="#fff" dark>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div class="black--text">
            <v-card-title
              v-if="title"
              v-text="title"
              class="headline mb-5 font-weight-bold"
            ></v-card-title>

            <v-card-subtitle
              v-html="text"
              class="black--text word-wraping stackeditor text"
            ></v-card-subtitle>
          </div>

          <v-avatar v-if="image" class="ma-3" size="125" tile>
            <v-img :src="image"></v-img>
          </v-avatar>
        </div>
        <v-divider class="blue-grey lighten-5"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="projectResume = false" color="blue" text>
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'CustomDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      projectResume: false
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  a {
    color: inherit;
  }
}
</style>
