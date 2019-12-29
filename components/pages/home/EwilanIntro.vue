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
            <div>
              <span v-html="title"></span> (<span v-html="level"></span>)
            </div>
            <div v-html="spec" />
            <div v-html="professional" class="white-link"></div>
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
      name: this.$textContent('dev_name'),
      title: this.$textContent('dev_title'),
      spec: this.$textContent('dev_spec'),
      level: this.$textContent('dev_level'),
      professional: this.$textContent('dev_professional')
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
  .white-link {
    color: white !important;
    a {
      font-weight: bold;
      color: white !important;
      text-decoration: none;
    }
  }
}
</style>
