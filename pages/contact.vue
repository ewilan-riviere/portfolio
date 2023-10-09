<script lang="ts" setup>
const { t } = useI18n()

useMetadata({
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
        {{ $t('contact.about') }}
      </div>
    </FormContact>
  </LayoutPage>
</template>
