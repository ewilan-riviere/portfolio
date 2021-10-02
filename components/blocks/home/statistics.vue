<template>
  <div class="dark:bg-gray-900 pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="
            mt-1
            text-3xl
            font-semibold
            text-gray-900
            dark:text-gray-100
            sm:text-4xl sm:tracking-tight
            lg:text-5xl
            title-font
          "
        >
          {{ $t('statistics.title') }}
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          {{ $t('statistics.subtitle') }}
        </p>
      </div>
    </div>
    <div class="mt-10 pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg shadow-md sm:grid sm:grid-cols-3">
              <div
                v-for="(stat, id) in stats"
                :key="id"
                class="
                  flex flex-col
                  dark:bg-gray-800
                  border-b border-gray-100
                  dark:border-gray-700
                  p-6
                  text-center
                  sm:border-0
                "
                :class="[
                  { 'rounded-l-md': id === 0 },
                  { 'rounded-r-md': id === stats.length - 1 },
                  {
                    'sm:border-l sm:border-r':
                      id !== 0 && id !== stats.length - 1,
                  },
                ]"
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-lg
                    leading-6
                    font-medium
                    text-gray-500
                  "
                >
                  {{ $t(stat.name) }}
                </dt>
                <dd class="order-1 text-4xl font-extrabold text-primary-600">
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data() {
    return {
      stats: [
        {
          name: 'training',
          value: `${this.$capitalize(this.$t('bachelor'))}+4`,
        },
        { name: 'projects', value: '0' },
        {
          name: 'experience',
          value: `${new Date().getFullYear() - 2018} ${this.$t('years')}`,
        },
      ],
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      try {
        const projects = await this.$content(`${this.$i18n.locale}/projects`, {
          deep: true,
        })
          .only(['title', 'slug'])
          .where({
            'metadata.isDraft': false,
          })
          .fetch()

        this.stats.forEach((stat) => {
          if (stat.name === 'projects') {
            stat.value = projects.length
          }
        })
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
