<template>
  <div id="informations" v-if="$store.state.api.formations !== undefined">
    <!-- information navbar  -->
    <div
      :class="informationNavbar ? 'information-navbar-bg' : ''"
      class="information-navbar"
    >
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
        <about v-if="info.type === 'global'" :data="info"></about>
        <formations v-if="info.type === 'formations'" :data="info"></formations>
        <skills v-if="info.type === 'skills'" :data="info"></skills>
        <projects v-if="info.type === 'projects'" :data="info"></projects>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Informations',
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
          name: 'À propos',
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
      ],
      informationNavbar: true
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
  beforeMount() {
    this.devDescInit(this.selectInfoMenu)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 950) {
        // this.informationNavbar = true
      } else {
        // this.informationNavbar = false
      }
    },
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
  }
  .information-navbar-bg {
    background-color: rgba(black, 0.6);
  }
  .information-navbar {
    position: sticky;
    z-index: 5;
    top: 0;
    transition: all 0.5s;
    padding: 0.5rem;
    margin-bottom: 1.6rem;
    width: 20rem;
    border-radius: 0.5rem;
    margin: auto;
    .informations-list {
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
}
</style>
