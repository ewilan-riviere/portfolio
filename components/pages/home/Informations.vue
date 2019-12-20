<template>
  <div id="informations" v-if="$store.state.api.formations !== undefined">
    <div
      v-for="item in $store.state.api.formations.data"
      :key="item.id"
      class="white-text"
    >
      {{ item.title }}
    </div>
    <div v-html="infoData" class="informations-container" />
    <div>
      <ul class="informations-list">
        <li class="informations-list-item">
          <v-icon
            :color="devDescActivate ? 'grey' : 'white'"
            @click="devDesc()"
            large
          >
            mdi-text-subject
          </v-icon>
        </li>
        <li class="informations-list-item">
          <v-icon
            :color="devFormationsActivate ? 'grey' : 'white'"
            @click="devFormations()"
            large
          >
            mdi-school
          </v-icon>
        </li>
        <li class="informations-list-item">
          <v-icon
            :color="devDescActivate ? 'grey' : 'white'"
            @click="devDesc()"
            large
          >
            mdi-xml
          </v-icon>
        </li>
        <li class="informations-list-item">
          <v-icon
            :color="devDescActivate ? 'grey' : 'white'"
            @click="devDesc()"
            large
          >
            mdi-library-books
          </v-icon>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devDescActivate: true,
      devFormationsActivate: false,
      infoData: ''
    }
  },
  beforeMount() {
    this.devDesc()
  },
  methods: {
    devDesc() {
      if (this.$store.state.api.texts !== undefined) {
        const dataApiInfo = this.$store.state.api.texts.data
        for (let index = 0; index < dataApiInfo.length; index++) {
          const element = dataApiInfo[index]
          if (element.slug === 'dev_resume') {
            this.infoData = element.text
          }
        }
      }
    },
    devFormations() {
      if (this.$store.state.api.texts !== undefined) {
        const dataApiInfo = this.$store.state.api.texts.data
        for (let index = 0; index < dataApiInfo.length; index++) {
          const element = dataApiInfo[index]
          if (element.slug === 'dev_resume') {
            this.infoData = element.text
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
#informations {
  // position: relative;
  // margin: 5rem 0;
  // height: 20rem;
  .informations-container {
    background-color: $white;
    // margin: 5rem 0;
    // position: absolute;
    // bottom: 2rem;
    // left: 0rem;
    padding: 2rem 5rem;
    // height: 5rem;
    width: 100vw;
  }
  .informations-list {
    padding-left: 0;
    list-style: none;
    .informations-list-item {
      display: inline-block;
      margin: 0 0.3rem;
    }
  }
}
</style>
