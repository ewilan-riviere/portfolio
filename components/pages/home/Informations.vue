<template>
  <div id="informations" v-if="$store.state.api.formations !== undefined">
    <div>
      <ul class="informations-list">
        <li
          v-for="(item, id) in selectInfoMenu"
          :key="id"
          class="informations-list-item"
        >
          <v-tooltip
            :visible="id == selectedItem ? 'visible' : 'hidden'"
            bottom
          >
            <template v-slot:activator="{ on }">
              <div @click="displayInfo(item, id)" v-on="on">
                <v-icon
                  :class="id == selectedItem ? '' : 'pointer'"
                  :color="id == selectedItem ? 'white' : 'grey'"
                  large
                >
                  {{ item.icon }}
                </v-icon>
              </div>
            </template>
            <span>
              {{ item.name }}
            </span>
          </v-tooltip>
        </li>
      </ul>
    </div>
    <client-only>
      <div class="informations-container">
        <div v-if="info.type === 'global'" class="word-wraping global-info">
          <h1 class="font-ames-croisees mb-4">
            {{ info.name }}
          </h1>
          <span v-html="info.data"></span>
        </div>
        <formations v-if="info.type === 'formations'" :data="info"></formations>
        <skills v-if="info.type === 'skills'" :data="info"></skills>
        <projects v-if="info.type === 'projects'" :data="info"></projects>
      </div>
    </client-only>
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
  props: {
    texts: {
      type: Array,
      default: () => []
    },
    formations: {
      type: Array,
      default: () => []
    },
    skills: {
      type: Array,
      default: () => []
    },
    projects: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedItem: '',
      info: { name: '', type: '', data: '' },
      list: [],
      selectInfoMenu: [
        {
          method: 'slug',
          request: 'dev-resume',
          type: 'global',
          name: 'Mon histoire',
          icon: 'mdi-text-subject'
        },
        {
          method: 'api',
          request: this.formations,
          type: 'formations',
          name: 'Mes formations',
          icon: 'mdi-school'
        },
        {
          method: 'api',
          request: this.skills,
          type: 'skills',
          name: 'Mes compétences',
          icon: 'mdi-xml'
        },
        {
          method: 'api',
          request: this.projects,
          type: 'projects',
          name: 'Mes projets',
          icon: 'mdi-library-books'
        }
      ]
    }
  },
  beforeMount() {
    this.devDescInit(this.selectInfoMenu)
  },
  methods: {
    devDescInit(selectInfoMenu) {
      this.info.name = selectInfoMenu[0].name
      this.info.data = this.$textContent(selectInfoMenu[0].request, this.texts)
      this.info.type = selectInfoMenu[0].type
    },
    displayInfo(item, id) {
      this.selectedItem = id
      if (item.method === 'api') {
        this.info.name = item.name
        this.info.data = item.request
        this.info.type = item.type
      } else if (item.method === 'slug') {
        this.info.name = item.name
        this.info.data = this.$textContent(item.request, this.texts)
        this.info.type = item.type
      }
    }
  }
}
</script>

<style lang="scss">
#informations {
  width: 100%;
  .informations-container {
    box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset;
    background-color: $white;
    padding: 2rem 5rem;
    @media screen and (max-width: 920px) {
      padding: 0;
    }
    // height: 30rem;
    // max-height: 80vh;
    // overflow: auto;
    width: 100%;
    .global-info {
      width: 50%;
      margin: auto;
      @media screen and (max-width: 920px) {
        width: 90%;
      }
    }
  }
  .informations-list {
    margin-bottom: 1.6rem;
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
