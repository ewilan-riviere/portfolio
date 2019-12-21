<template>
  <div class="ewilan-intro">
    <div class="ewilan-intro-center">
      <div class="ewilan-intro-sub white-text">
        <ewilanlogo
          :anim="true"
          class="ewilan-intro-logo"
          logo-route="/portfolio"
        />
        <h1 v-html="name" class="intro-title font-morpheus background-ewilan" />
        <div class="intro-details font-lautre mb-5">
          <div>
            <div v-html="job" class="background_developpeuse" />
            <div v-html="jobDetails" class="background_back" />
          </div>
        </div>
        <social v-if="$store.state.api.formations !== undefined" />
      </div>
    </div>
  </div>
</template>

<script>
import ewilanlogo from '@/components/sub/EwilanLogo.vue'
import social from '@/components/pages/home/Social.vue'

export default {
  components: {
    ewilanlogo,
    social
  },
  props: {},
  data() {
    return {
      name: '',
      job: '',
      jobDetails: '',
      env: process.env.baseUrl
    }
  },
  beforeMount() {
    this.dataApi()
  },
  methods: {
    dataApi() {
      if (this.$store.state.api.texts !== undefined) {
        const dataApiInfo = this.$store.state.api.texts.data
        for (let index = 0; index < dataApiInfo.length; index++) {
          const element = dataApiInfo[index]
          if (element.slug === 'dev_name') {
            this.name = element.text
          }
          if (element.slug === 'dev_title') {
            this.job = element.text
          }
          if (element.slug === 'dev_spec') {
            this.jobDetails = element.text.replace(':', '<br>')
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.ewilan-intro {
  .ewilan-intro-center {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 10rem 0;
    .ewilan-intro-sub {
      // width: 50%;
      .ewilan-intro-logo {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
      }
    }
  }
}
.intro-title {
  margin-bottom: 1rem;
}
.intro-details {
  font-size: 2rem;
}
</style>
