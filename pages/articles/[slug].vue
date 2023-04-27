<script lang="ts" setup>
const { fullPath } = useRoute()
const { findOne, content: article, toc } = useMarkdownContent()
await findOne(fullPath)

const { date } = useUtils()
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

useHead({
  titleTemplate: '%s - Ewilan Rivière',
  title: article.value?.title,
})
</script>

<template>
  <layout-page
    v-if="article"
    :title="article?.title"
    :description="article?.description"
  >
    <template #header>
      <div class="text-base text-zinc-500 dark:text-zinc-300 mt-5">
        <time
          v-if="article.publishedAt"
          :datetime="article.publishedAt?.toString()"
          :class="{
            'text-sm': article.updatedAt,
          }"
          class="block"
        >
          {{
            $t(`blog.article.published-at`, {
              date: date(article.publishedAt, "date"),
            })
          }}
        </time>
        <time
          v-if="article.updatedAt"
          :datetime="article.updatedAt?.toString()"
          class="block mt-1 font-semibold"
        >
          {{
            $t(`blog.article.updated-at`, {
              date: date(article.updatedAt, "date"),
            })
          }}
        </time>
      </div>
    </template>

    <div class="xl:relative">
      <div class="mx-auto max-w-2xl">
        <typed-link
          :to="{ name: 'articles' }"
          aria-label="Go back to articles"
          class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </typed-link>
      </div>
    </div>

    <section class="lg:flex justify-between relative gap-x-10">
      <div class="order-1 lg:order-2 sticky top-16 h-full">
        <ArticlesToc :items="toc?.links" />
        <button
          class="rounded-full bg-gray-800 w-8 h-8 border border-gray-700 flex mx-auto mt-6 hover:bg-gray-700"
          @click="scrollToTop()"
        >
          <SvgIcon name="arrow-up" class="w-4 h-4 m-auto" />
        </button>
      </div>
      <div class="mx-auto">
        <app-img
          :src="article.picture"
          :alt="article.title"
          class="w-full h-64 object-top object-cover rounded-md"
          :legend="$t('legend', { from: article.legend })"
          :origin="article.origin"
        />
        <header class="flex flex-col">
          <h1 class="sr-only">
            {{ article.title }}
          </h1>
        </header>
        <div
          class="mt-8 prose prose-xl dark:prose-invert prose-a:no-underline max-w-xl prose-a:hoverable"
        >
          <ContentRenderer :value="article" />
        </div>
      </div>
    </section>
  </layout-page>
</template>
