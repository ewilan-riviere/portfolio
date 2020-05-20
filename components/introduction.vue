<template>
  <div class="ewilan-intro absolute center-it">
    <div class="ewilan-intro-center">
      <div class="ewilan-intro-sub white-text">
        <intro-logo
          :anim="true"
          class="ewilan-intro-logo"
          logo-route="/portfolio"
        ></intro-logo>
        <h1
          class="intro-title font-morpheus background-ewilan text-3xl"
          v-html="name"
        />
        <div class="intro-details font-lautre mb-5">
          <div>
            <div>
              <span v-html="title"></span> (<span v-html="level"></span>)
            </div>
            <div class="white-link" v-html="professional"></div>
            <div class="mt-4" v-html="spec" />
          </div>
        </div>
        <social-link
          v-if="socials !== undefined"
          :socials="socials"
        ></social-link>
      </div>
    </div>
  </div>
</template>

<script>
import introLogo from '@/components/intro-logo.vue'
import socialLink from '@/components/social-link.vue'

export default {
  name: 'Introduction',
  components: {
    introLogo,
    socialLink,
  },
  props: {
    texts: {
      type: Array,
      default: () => [],
    },
    socials: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      name: this.$textContent('dev-name', this.texts),
      title: this.$textContent('dev-title', this.texts),
      spec: this.$textContent('dev-spec', this.texts),
      level: this.$textContent('dev-level', this.texts),
      professional: this.$textContent('dev-professional', this.texts),
    }
  },
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
        // display: flex;
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
