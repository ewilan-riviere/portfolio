<template>
  <div class="skills">
    <v-container fluid>
      <div>
        <h1 class="font-ames-croisees mb-4">
          {{ data.name }}
        </h1>
        <div class="ml-4 citation d-md-flex">
          <img
            src="/images/crown.png"
            alt=""
            class="mr-4"
            width="250"
            height="100%"
          />
          <div>
            <blockquote>
              <i>
                Developpers made front, and it delights me. Developpers made
                back, and it delights me. When it comes to code I fight for PHP,
                when it comes to design... I don't choose sides.
              </i>
            </blockquote>
            <footer>- Ewilan Martell, <cite>Game of Devs</cite></footer>
          </div>
        </div>
      </div>
      <div class="pt-5 skill-image-wrapper">
        <div v-for="(skill, skillId) in data.data" :key="skillId" class="">
          <v-tooltip
            :open-on-click="true"
            :color="`${skill.color}`"
            top
            max-width="20rem"
          >
            <template v-slot:activator="{ on }">
              <v-btn class="my-2" to="/portfolio" active-class="background">
                <img
                  v-on="on"
                  :src="skill.image"
                  :alt="skill.title"
                  :style="`right: ${rightImagePosition(skillId)}rem`"
                  class="skill-image shadowed"
                />
              </v-btn>
            </template>
            <div
              :class="{ 'black--text': skill.color_text_dark }"
              class="skill-image-tooltip my-5"
            >
              <div class="font-weight-bold mb-3">
                {{ skill.title }}
              </div>
              <div
                v-if="skill.blockquote_text"
                class="word-wraping citation"
                lang="fr"
              >
                <blockquote>
                  <i>“<span v-html="skill.blockquote_text"></span>”</i>
                  <footer v-if="skill.blockquote_who" class="mt-2">
                    <cite> —{{ skill.blockquote_who }} </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </v-tooltip>
        </div>
      </div>
      <div class="teasing text-lg-right">
        ...et pour plus de détails et plus de compétences,
        <nuxt-link :to="{ name: 'portfolio' }" class="invisible-link">
          voir le portfolio détaillé</nuxt-link
        >...
      </div>
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
  },
  methods: {
    rightImagePosition(skillId) {
      // return skillId + 2
    }
  }
}
</script>

<style lang="scss">
.skills {
  .skill-image-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    .v-btn {
      height: initial !important;
      padding: 0 !important;
      background-color: transparent !important;
      will-change: initial !important;
      box-shadow: none !important;
      &::before {
        background-color: transparent !important;
      }
    }
    .skill-image-tooltip {
      .citation {
        blockquote {
          background-color: lightgray;
          border-radius: 0.2rem;
          padding: 1rem;
        }
        footer {
          margin-top: 0.5rem;
          font-weight: bold;
        }
      }
    }

    .shadowed {
      filter: drop-shadow(0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.5));
    }
    .skill-image {
      position: relative;
      max-height: 100%;
      width: 10rem;
      top: 0;
      transition: all 0.5s;
      &:hover {
        top: -1rem;
      }
    }
  }

  .teasing {
    text-transform: initial;
    a {
      &:hover {
        border-bottom: 0.1rem solid black;
        background-color: lightgray;
      }
    }
  }

  .citation {
    width: 90vw;
    margin: 1.5rem auto !important;
    @media screen and (min-width: 920px) {
      width: 40rem;
    }
    blockquote {
      background-color: lightgray;
      border-radius: 0.2rem;
      padding: 1rem;
    }
    footer {
      margin-top: 0.5rem;
      font-weight: bold;
    }
  }
  .v-list-item {
    &__content {
      overflow: visible;
    }
  }
  .v-list-item__subtitle {
    // -webkit-line-clamp: 3;
    white-space: normal;
  }
}
</style>
