<script lang="ts" setup>
const { findAll, contents: articles } = useMarkdownContent()
await findAll('articles')
</script>

<template>
  <layout-page title="Blog" description="Some articles about tech">
    <div class="space-y-20">
      <section
        class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
      >
        <div
          class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4"
        >
          <div class="md:col-span-3">
            <div class="space-y-16">
              <div
                v-for="article in articles"
                :key="article._id"
                class="flex items-start space-x-6"
              >
                <div class="text-sm font-semibold text-zinc-800 dark:text-zinc-100 pr-16 w-40 space-y-3">
                  {{ article.category }}
                </div>
                <articles-card
                  class="w-full"
                  :article="article"
                  type="home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </layout-page>
</template>
