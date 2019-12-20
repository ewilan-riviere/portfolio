<template>
  <div class="ewilan-intro">
    <div class="ewilan-intro-center">
      <div class="ewilan-intro-sub white-text">
        <EwilanLogo class="ewilan-intro-logo" logo-route="/portfolio" :anim="true" />
        <h1 class="intro-title font-morpheus background-ewilan" v-html="name" />
        <div class="intro-details font-lautre mb-5">
          <div>
            <div class="background_developpeuse" v-html="job" />
            <div class="background_back" v-html="jobDetails" />
          </div>
        </div>
        <Social />
      </div>
    </div>
  </div>
</template>

<script>
import EwilanLogo from '@/components/sub/EwilanLogo.vue'
import Social from '@/components/pages/home/Social.vue'

export default {
  components: {
    EwilanLogo,
    Social
  },
  props: {
  },
  data () {
    return {
      name: '',
      job: '',
      jobDetails: '',
      env: process.env.baseUrl
    }
  },
  beforeMount () {
    this.dataApi()
  },
  methods: {
    dataApi () {
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
