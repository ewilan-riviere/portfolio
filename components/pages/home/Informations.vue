<template>
  <div id="informations">
    <div v-for="item in $store.state.api.formations.data" :key="item.id" class="white-text">
      {{ item.title }}
    </div>
    <div class="informations-container" v-html="infoData" />
    <div>
      <ul class="informations-list">
        <li class="informations-list-item">
          <v-icon large :color="devDescActivate ? 'grey' : 'white'" @click="devDesc()">
            mdi-text-subject
          </v-icon>
        </li>
        <li class="informations-list-item">
          <v-icon large :color="devFormationsActivate ? 'grey' : 'white'" @click="devFormations()">
            mdi-school
          </v-icon>
        </li>
        <li class="informations-list-item">
          <v-icon large :color="devDescActivate ? 'grey' : 'white'" @click="devDesc()">
            mdi-xml
          </v-icon>
        </li>
        <li class="informations-list-item">
          <v-icon large :color="devDescActivate ? 'grey' : 'white'" @click="devDesc()">
            mdi-library-books
          </v-icon>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      devDescActivate: true,
      devFormationsActivate: false,
      infoData: ''
    }
  },
  beforeMount () {
    this.devDesc()
  },
  methods: {
    devDesc () {
      const dataApiInfo = this.$store.state.api.texts.data
      for (let index = 0; index < dataApiInfo.length; index++) {
        const element = dataApiInfo[index]
        if (element.slug === 'dev_resume') {
          this.infoData = element.text
        }
      }
    },
    devFormations () {
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
