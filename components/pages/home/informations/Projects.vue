<template>
  <div>
    <v-container class="">
      <v-row no-gutters>
        <v-col
          v-for="item in data"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="project-col"
        >
          <v-card class="pa-2 ma-2 project-card">
            <v-img
              :src="item.image"
              v-if="item.image"
              :alt="item.title"
              class="white--text project-img align-end"
              width="150"
            />
            <div class="text-center mt-5">
              <h2>{{ item.title }}</h2>
            </div>

            <v-card-text class="text--primary">
              {{ item.resume }}
            </v-card-text>

            <v-card-actions class="project-actions">
              <v-btn
                :href="item.github_link"
                :disabled="!item.github_link"
                target="_blank"
                color="orange"
                text
                link
              >
                <v-icon v-if="getLinkDomain(item.github_link) == 'github.com'">
                  mdi-github-circle
                </v-icon>
                <v-icon
                  v-else-if="getLinkDomain(item.github_link) == 'gitlab.com'"
                >
                  mdi-gitlab
                </v-icon>
                <v-icon v-else>
                  mdi-git
                </v-icon>
                &nbsp;
                <span v-if="getLinkDomain(item.github_link) == null">Git</span>
                <span v-else>{{ getLinkDomain(item.github_link) }}</span>
              </v-btn>

              <v-btn
                :href="item.try_it"
                :disabled="!item.try_it"
                target="_blank"
                color="orange"
                text
                link
              >
                <v-icon>mdi-cursor-default-click</v-icon>&nbsp; Essayer
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
  name: 'Projects',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    getLinkDomain(url) {
      if (url !== null) {
        // eslint-disable-next-line no-useless-escape
        const matches = url.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i)
        const domain = matches && matches[1]
        return domain
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-col {
  display: flex;
  .project-card {
    width: 100%;
    margin: auto;
    .project-img {
      width: 100%;
      margin: auto;
    }
    .project-actions {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
