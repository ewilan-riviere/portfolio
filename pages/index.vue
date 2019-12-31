<template>
  <v-layout id="home" column justify-center align-center>
    <div id="ewilanIntro">
      <ewilan-intro :texts="texts" :socials="socials" />

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
      <informations :texts="texts" :formations="formations" />
    </div>
  </v-layout>
</template>

<script>
import ewilanIntro from '@/components/pages/home/EwilanIntro.vue'
import informations from '@/components/pages/home/Informations.vue'

export default {
  components: {
    ewilanIntro,
    informations
  },
  data() {
    return {
      title: 'NuxtJS',
      subtitle: 'Ewilan Rivière Portfolio',

      noScroll: true
    }
  },
  async asyncData({ app, query, error }) {
    const [formationsApi, textsApi, socialsApi] = await Promise.all([
      app.$axios.get('formations'),
      app.$axios.get('texts'),
      app.$axios.get('socials')
    ])
    return {
      formations: formationsApi.data,
      texts: textsApi.data.data,
      socials: socialsApi.data.data
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
    margin-bottom: 3rem;
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
