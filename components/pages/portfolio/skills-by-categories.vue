<template>
  <div class="skills">
    <v-card class="mx-auto" width="600">
      <v-list>
        <v-list-group
          v-for="(category, categoryKey) in categories"
          :key="categoryKey"
          prepend-icon="mdi-home"
        >
          <template v-slot:activator>
            <v-list-item-title>
              {{ category.display }}
            </v-list-item-title>
          </template>

          <v-list-group
            v-for="(skill, skillKey) in category.skills.data"
            :key="skillKey"
            :color="skill.color"
            :style="{ background: `rgba(${colorHexa(skill.color)},0.1)` }"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-avatar v-if="skill.image" class="mr-4">
                <v-img :src="skill.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold shadow-title">
                  {{ skill.title }}
                </v-list-item-title>
                <v-list-item-subtitle
                  v-html="skill.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
              </v-list-item-content>
            </template>

            <v-list-item v-if="skill.version">
              <v-list-item-subtitle>
                Version : {{ skill.version }}
              </v-list-item-subtitle>
            </v-list-item>

            <v-list-item :color="skill.color">
              <v-list-item-subtitle>
                {{ skill.details }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-group>

          <!-- <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(crud, i) in cruds" :key="i">
              <v-list-item-title v-text="crud[0]"></v-list-item-title>
              <v-list-item-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group> -->
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    categories: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    colorHexa(hexaCode) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
      hexaCode = hexaCode.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b
      })

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexaCode)
      // eslint-disable-next-line no-unused-vars
      const rgb = `${parseInt(result[1], 16)},
      ${parseInt(result[2], 16)},
      ${parseInt(result[3], 16)}`
      return result ? rgb : '0,0,0'
    }
  }
}
</script>

<style lang="scss" scoped>
$card-width: 210px;
.skills {
  padding: 5rem 2rem 2rem 2rem;
  .v-list-item--active {
    .shadow-title {
      // text-shadow: 2px 2px 3px rgba(black, 0.8);
    }
  }
  .v-avatar {
    border-radius: initial;
  }
  .v-card {
    // min-height: 25rem;
    position: relative;
    &__text {
      width: $card-width;
    }
    &__actions {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
