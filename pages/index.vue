<template>
  <v-layout id="home" column justify-center align-center>
    <div id="ewilanIntro">
      <introduction :texts="texts" :socials="socials"></introduction>

      <transition name="fade">
        <div v-if="noScroll" class="view">
          <div class="go-down-container">
            <v-icon x-large color="white" class="go-down">
              mdi-chevron-down
            </v-icon>
          </div>
        </div>
      </transition>
    </div>
    <div id="informations">
      <details-informations
        :texts="texts"
        :formations="formations"
        :skills="getFavoriteSkills()"
        :projects="projects"
        :passions="passions"
      ></details-informations>
    </div>
  </v-layout>
</template>

<script>
import introduction from '@/components/pages/home/introduction.vue'
import detailsInformations from '@/components/pages/home/details-informations.vue'

export default {
  components: {
    introduction,
    detailsInformations
  },
  head() {
    return {
      title: '',
      titleTemplate: 'Portfolio · Ewilan Rivière'
    }
  },
  data() {
    return {
      title: 'NuxtJS',
      subtitle: 'Ewilan Rivière Portfolio',

      noScroll: true
    }
  },
  async asyncData({ app, query, error }) {
    const [
      formationsApi,
      skillsApi,
      projectsApi,
      passionsApi,
      textsApi,
      socialsApi
    ] = await Promise.all([
      app.$axios.$get('formations'),
      app.$axios.$get('skills'),
      app.$axios.$get('projects'),
      app.$axios.$get('passions'),
      app.$axios.$get('texts'),
      app.$axios.$get('socials')
    ])

    // const skillsFavorites = []
    // skillsApi.data.forEach((element) => {
    //   if (
    //     element.is_favorite &&
    //     element.image !== null &&
    //     element.category.data.category !== 'langues'
    //   ) {
    //     skillsFavorites.push(element)
    //   }
    // })

    // const skillsFavSplit = []
    // let skillsFavSub

    // while (skillsFavorites.length > 0) {
    //   skillsFavSub = skillsFavorites.splice(0, 8)
    //   skillsFavSplit.push(skillsFavSub)
    // }

    return {
      formations: formationsApi.data,
      skills: skillsApi.data,
      // skillsFavSplit,
      projects: projectsApi.data,
      passions: passionsApi.data,
      texts: textsApi.data,
      socials: socialsApi.data
    }
  },
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    getFavoriteSkills() {
      const skillsFavorites = []
      this.skills.forEach((element) => {
        if (
          element.is_favorite &&
          element.image !== null &&
          element.category.data.slug !== 'langues'
        ) {
          skillsFavorites.push(element)
        }
      })
      return skillsFavorites
    },
    handleScroll() {
      if (window.scrollY > 30) {
        this.noScroll = false
      } else {
        this.noScroll = true
      }
    }
  }
}
</script>

<style lang="scss">
.bg-swiper {
  width: 40rem;
}
#home {
  #ewilanIntro {
    min-height: 100vh;
    position: relative;

    .go-down-container {
      display: flex;
      position: absolute;
      bottom: 5rem;
      left: 50%;
      transform: translate(-50%);
      .go-down {
        font-size: 5rem !important;
        margin: auto;
        text-align: center;
        animation: scrollToBottom 3s infinite;
      }
    }
  }
  #informations {
    margin-bottom: 1rem;
  }

  @keyframes scrollToBottom {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(20px);
    }

    100% {
      transform: translateY(0);
    }
  }
}
</style>
