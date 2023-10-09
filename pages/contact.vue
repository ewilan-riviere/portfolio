<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('head.contact'),
})
</script>

<template>
  <LayoutPage
    :title="$t('contact.page-title')"
    :description="$t('contact.page-subtitle')"
  >
    <FormContact class="mt-6">
      <div class="prose dark:prose-invert word-wraping mx-auto mb-6">
        <p>{{ $t('contact.about') }}</p>
        <p>{{ $t('contact.hiring-message') }}</p>
      </div>
    </FormContact>
  </LayoutPage>
</template>
