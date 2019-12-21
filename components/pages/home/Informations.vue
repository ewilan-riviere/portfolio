<template>
  <div id="informations" v-if="$store.state.api.formations !== undefined">
    <div class="informations-container">
      <div v-html="info.data" v-if="info.type === 'global'"></div>
      <formations
        v-if="info.type === 'formations'"
        :data="info.data"
      ></formations>
      <skills v-if="info.type === 'skills'" :data="info.data"></skills>
      <projects v-if="info.type === 'projects'" :data="info.data"></projects>
    </div>
    <div>
      <ul class="informations-list">
        <li
          v-for="(item, id) in selectInfoMenu"
          :key="id"
          class="informations-list-item"
        >
          <div @click="displayInfo(item.request, item.method, item.type, id)">
            <v-icon
              :class="id == selectedItem ? '' : 'pointer'"
              :color="id == selectedItem ? 'white' : 'grey'"
              large
            >
              {{ item.icon }}
            </v-icon>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import formations from '@/components/pages/home/informations/Formations.vue'
import skills from '@/components/pages/home/informations/Skills.vue'
import projects from '@/components/pages/home/informations/Projects.vue'

export default {
  components: {
    formations,
    skills,
    projects
  },
  data() {
    return {
      selectedItem: '',
      info: { type: '', data: '' },
      list: [],
      selectInfoMenu: [
        {
          method: 'slug',
          request: 'dev_resume',
          type: 'global',
          icon: 'mdi-text-subject'
        },
        {
          method: 'api',
          request: this.$store.state.api.formations,
          type: 'formations',
          icon: 'mdi-school'
        },
        {
          method: 'api',
          request: this.$store.state.api.skills,
          type: 'skills',
          icon: 'mdi-xml'
        },
        {
          method: 'api',
          request: this.$store.state.api.projects,
          type: 'projects',
          icon: 'mdi-library-books'
        }
      ]
    }
  },
  beforeMount() {
    this.devDescInit()
  },
  methods: {
    devDescInit() {
      this.info.data = this.$textContent('dev_resume')
      this.info.type = 'global'
    },
    displayInfo(request, method, type, id) {
      this.selectedItem = id
      if (method === 'api') {
        this.info.data = request.data
        this.info.type = type
      } else if (method === 'slug') {
        this.info.data = this.$textContent(request)
        this.info.type = type
      }
    }
  }
}
</script>

<style lang="scss">
#informations {
  width: 100%;
  .informations-container {
    background-color: $white;
    padding: 2rem 5rem;
    height: 20rem;
    overflow: auto;
    width: 100%;
  }
  .informations-list {
    margin-top: 1.6rem;
    display: flex;
    justify-content: center;
    padding-left: 0;
    list-style: none;
    .informations-list-item {
      display: inline-block;
      margin: 0 0.3rem;
      padding: 0 1rem;
    }
  }
}
</style>
