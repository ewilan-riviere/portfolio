<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <a :href="checkLink()" v-on="on" target="_blank">
          <v-icon :class="addClass" large color="white darken-2">
            mdi-{{ icon }}
          </v-icon>
        </a>
      </template>
      <span>{{ name }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    addClass: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    checkLink() {
      if (this.link.includes('@')) {
        return 'mailto:' + this.link
      } else {
        return this.link
      }
    }
  }
}
</script>

<style lang="scss">
#icon {
  .icon-color {
    color: $black;
    &:hover {
      color: rgba($black, 0.5);
    }
  }
}
</style>
