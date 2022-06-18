<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>

<template>
  <form class="language">
    <label for="locale-select">{{ $t("language") }}</label>
    <select id="locale-select" v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  </form>
</template>
