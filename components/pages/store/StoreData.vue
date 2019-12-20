<template>
  <div>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(apiItem,i) in $store.state.api" :key="i">
        <v-expansion-panel-header>
          {{ i }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-for="(apiSubItem,iSub) in apiItem.data" :key="iSub">
            <div v-if="i=='skills'">
              {{ apiSubItem.title }}
            </div>
            <div v-if="i=='projects'">
              <div class="my-3">
                {{ apiSubItem.title }}
                <ul>
                  <li>
                    {{ apiSubItem.image }}
                  </li>
                  <li>
                    {{ apiSubItem.resume }}
                  </li>
                  <li>
                    {{ apiSubItem.github_link }}
                  </li>
                  <li>
                    {{ apiSubItem.try_it }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="i=='formations'">
              <div class="my-3">
                {{ apiSubItem.title }}
                <ul>
                  <li>
                    {{ apiSubItem.title_link }}
                  </li>
                  <li>
                    {{ apiSubItem.logo }}
                  </li>
                  <li>
                    {{ apiSubItem.place }}
                  </li>
                  <li>
                    {{ apiSubItem.place_link }}
                  </li>
                  <li>
                    {{ apiSubItem.promo }}
                  </li>
                  <li>
                    {{ apiSubItem.promo_link }}
                  </li>
                  <li>
                    {{ apiSubItem.level }}
                  </li>
                  <li>
                    {{ apiSubItem.date_begin }}
                  </li>
                  <li>
                    {{ apiSubItem.date_end }}
                  </li>
                  <li>
                    {{ apiSubItem.project }}
                  </li>
                  <li>
                    {{ apiSubItem.project_link }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="i=='technologies'">
              <div class="my-3">
                {{ apiSubItem.name }}
                <ul>
                  <li>
                    {{ apiSubItem.display_name }}
                  </li>
                  <li>
                    {{ apiSubItem.displaying }}
                  </li>
                  <li>
                    {{ apiSubItem.logo }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="i=='informations'">
              <div class="my-3">
                {{ apiSubItem.slug }}
                <ul>
                  <li>
                    {{ apiSubItem.text }}
                  </li>
                  <li>
                    {{ apiSubItem.image }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">

</style>
