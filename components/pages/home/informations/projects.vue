<template>
  <div>
    <div>
      <h1 class="font-ames-croisees mb-4">
        {{ data.name }}
      </h1>
    </div>
    <swiper :config="swiperConfig" :with-pagination="true">
      <div v-for="(item, id) in data.data" :key="id" class="swiper-slide">
        <v-card class="ma-2 pb-5 project-card">
          <div class="pa-2">
            <v-img
              :src="item.image"
              v-if="item.image"
              :alt="item.title"
              class="white--text project-img align-end"
              width="150"
            />
            <style type="text/css">
              @font-face {
                font-family: '{{ $slugify(item.title) }}';
                src: url({{item.font}});
              }
              .font-{{ $slugify(item.title) }} {
                color: blue;
                font-family: '{{ $slugify(item.title) }}';
              }
            </style>
            <div class="text-center mt-5">
              <h2 :class="`font-` + $slugify(item.title)">
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
          </div>
        </v-card>
      </div>
    </swiper>
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

<style lang="scss">
.swiper-button-next {
  right: -3rem;
  background-color: lightgray;
  &:hover {
    background-color: gray;
  }
}
.project-card {
  // position: relative;
  min-height: 25rem;
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
  .v-card__text {
    width: inherit;
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
</style>
