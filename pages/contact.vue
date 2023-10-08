<script lang="ts" setup>
const { t } = useI18n()

useMetadata({
  title: t('head.contact'),
})
</script>

<template>
  <LayoutPage :title="$t('contact.page-title')" :description="$t('contact.page-subtitle')">
    <form-contact class="mt-6" />
  </LayoutPage>
</template>
