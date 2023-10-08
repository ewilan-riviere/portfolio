<script lang="ts" setup>
const { params } = useRoute()
const { frontmatter, file, headings, ContentRenderer } = await useMarkdoc({ input: (params.slug as string), type: 'api', component: true })

const { date } = useUtils()
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
const picture = computed(() => `/images/blog/${file.value?.slug}.jpg`)

useMetadata({
  title: frontmatter.value?.title,
  image: picture.value,
  description: frontmatter.value?.description,
})
</script>

<template>
  <LayoutPage
    v-if="frontmatter"
    :title="frontmatter.title"
    :description="frontmatter.description"
  >
    <template #header>
      <div class="text-base text-zinc-500 dark:text-zinc-300 mt-5">
        <time
          v-if="frontmatter.publishedAt"
          :datetime="frontmatter.publishedAt?.toString()"
          :class="{
            'text-sm': frontmatter.updatedAt,
          }"
          class="block"
        >
          {{
            $t(`blog.article.published-at`, {
              date: date(frontmatter.publishedAt, "date"),
            })
          }}
        </time>
        <time
          v-if="frontmatter.updatedAt"
          :datetime="frontmatter.updatedAt?.toString()"
          class="block mt-1 font-semibold"
        >
          {{
            $t(`blog.article.updated-at`, {
              date: date(frontmatter.updatedAt, "date"),
            })
          }}
        </time>
      </div>
    </template>

    <div class="xl:relative">
      <div class="mx-auto max-w-2xl">
        <TypedLink
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
        </TypedLink>
      </div>
    </div>

    <section class="lg:flex justify-between relative gap-x-10">
      <div class="order-1 lg:order-2 lg:sticky lg:top-16 h-full">
        <ArticleToc :items="headings" />
        <button
          class="hidden lg:flex rounded-full bg-gray-50 dark:bg-gray-800 w-8 h-8 border border-gray-100 dark:border-gray-700 mx-auto mt-6 hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="scrollToTop()"
        >
          <SvgIcon name="arrow-up" class="w-4 h-4 m-auto" />
        </button>
      </div>
      <div class="mx-auto mt-16 lg:mt-0">
        <AppImg
          :src="picture"
          :alt="frontmatter.title"
          class="w-full h-64 object-top object-cover rounded-md"
          :legend="$t('legend', { from: frontmatter.legend })"
          :origin="frontmatter.origin"
        />
        <header class="flex flex-col">
          <h1 class="sr-only">
            {{ frontmatter.title }}
          </h1>
        </header>
        <div class="border border-gray-100 dark:border-gray-800 rounded-md mt-10 p-4">
          <div class="uppercase">
            {{ frontmatter.category }}
          </div>
          <div v-if="frontmatter.tags" class="italic text-gray-600 dark:text-gray-400 mt-2">
            {{ frontmatter.tags.map((tag: string) => `#${tag}`).join(' ') }}
          </div>
        </div>
        <div
          class="mt-8 prose prose-lg dark:prose-invert prose-a:no-underline max-w-2xl prose-a:hoverable"
        >
          <ContentRenderer />
        </div>
      </div>
    </section>
  </LayoutPage>
</template>
