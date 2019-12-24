<template>
  <div>
    <v-container class="" fluid>
      <div>
        <h1 class="font-ames-croisees mb-4">
          {{ data.name }}
        </h1>
      </div>
      <v-row>
        <v-col
          v-for="item in data.data"
          :key="item.id"
          cols="12"
          md="6"
          lg="4"
          xl="3"
          class="project-col"
        >
          <v-card class="ma-2 pb-5 project-card">
            <div class="pa-2">
              <v-img
                :src="item.image"
                v-if="item.image"
                :alt="item.title"
                class="white--text project-img align-end"
                width="150"
              />
              <div class="text-center mt-5">
                <h2
                  :class="
                    $slugify(item.title) === 'portfolio'
                      ? 'font-morpheus'
                      : `font-` + $slugify(item.title)
                  "
                >
                  {{ item.title }}
                </h2>
              </div>

              <v-card-text class="text--primary">
                {{ item.resume }}
              </v-card-text>
            </div>

            <div class="project-actions-container">
              <v-card-actions class="project-actions">
                <v-btn
                  :href="item.github_link"
                  :disabled="!item.github_link"
                  target="_blank"
                  color="orange"
                  text
                  link
                >
                  <v-icon
                    v-if="getLinkDomain(item.github_link) == 'github.com'"
                  >
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
                  <span v-if="getLinkDomain(item.github_link) == null"
                    >Git</span
                  >
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
            </div>
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
      type: Object,
      default: () => {}
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
        let domain = matches && matches[1]
        domain = domain.split('.')
        if (domain.length === 2) {
          return domain[0]
        } else {
          return domain[1]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-col {
  // display: flex;
  .project-card {
    position: relative;
    min-height: 100%;
    // max-height: 100%;
    // width: 100%;
    margin: auto;
    .project-img {
      // width: 100%;
      margin: auto;
      -webkit-filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5));
      -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
      filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
    }
    .project-actions-container {
      position: absolute;
      bottom: 0;
      width: 100%;
      .project-actions {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
