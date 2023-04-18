<script lang="ts" setup>
const { t } = useI18n()

useHead({
  titleTemplate: '%s - Ewilan Rivière',
  title: t('head.contact'),
})
</script>

<template>
  <layout-page :title="$t('contact.page-title')" :description="$t('contact.page-subtitle')">
    <form-contact class="mt-6" />
  </layout-page>
</template>
