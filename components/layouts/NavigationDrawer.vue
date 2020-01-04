<template>
  <v-sheet class="navigation-drawer-container">
    <v-container class="navigation-drawer-toggle">
      <v-row align="center" justify="start">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div
              :class="drawer ? 'is-active' : ''"
              @click="hamburgerActivate()"
              @click.stop="drawer = !drawer"
              v-on="on"
              class="hamburger  hamburger--collapse"
            >
              <div class="hamburger-background" />
              <div class="hamburger-box">
                <div class="hamburger-inner" />
              </div>
            </div>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" temporary>
      <div>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="images/logos/ewilan-photo.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list dense>
          <router-link
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
            class="black-text"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </div>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      hamburgerActive: false,
      drawer: false,
      name: 'Ewilan Rivière',
      items: [
        {
          title: 'Accueil',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Portfolio',
          icon: 'folder-open',
          link: '/portfolio'
        },
        {
          title: 'Store',
          icon: 'database-check',
          link: '/store'
        },
        {
          title: 'À propos',
          icon: 'information',
          link: '/a-propos'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        this.drawer = !this.drawer
      }
    })
  },
  methods: {
    hamburgerActivate() {
      if (this.hamburgerActive === true) {
        this.hamburgerActive = false
      } else {
        this.hamburgerActive = true
      }
    }
  }
}
</script>

<style lang="scss">
.v-navigation-drawer {
  position: fixed;
  top: 0 !important;
}
.navigation-drawer-container {
  background-color: transparent !important;
  .navigation-drawer-toggle {
    position: absolute;
  }
  .v-navigation-drawer__content {
    // margin-top: 4rem;
  }

  a {
    text-decoration: none;
    .v-list-item:hover {
      background-color: $pink-custom-dark;
    }
  }
  .nuxt-link-exact-active {
    .v-list-item {
      background-color: $pink-custom-dark;
    }
  }

  .hamburger {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 10;
    transition: all 3s;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    .hamburger-background {
      background-color: rgba($gray, 0.6);
      position: absolute;
      height: 4rem;
      width: 4rem;
      top: -0.2rem;
      left: 0.2rem;
      border-radius: 2rem;
    }
  }
  .is-active {
    top: 0;
    left: 11.5rem;
    .hamburger-background {
      background-color: transparent;
    }
  }
}
</style>
