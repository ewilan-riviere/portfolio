<template>
  <div class="relative py-6 sm:py-10 lg:py-16">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        text-center
        sm:max-w-3xl sm:px-6
        lg:px-8 lg:max-w-7xl
      "
    >
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.id" class="pt-6">
            <div
              class="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8"
            >
              <div class="-mt-6">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-primary-500
                      dark:bg-primary-700
                      rounded-md
                      shadow-lg
                    "
                  >
                    <svg-icon
                      :name="`features/${feature.icon}`"
                      class="w-6 h-6 text-white"
                    />
                  </span>
                </div>
                <h3
                  class="
                    mt-8
                    text-lg
                    font-medium
                    text-gray-900
                    dark:text-gray-200
                    tracking-tight
                  "
                >
                  {{ $t(`features.${feature.title}`) }}
                </h3>
                <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                  {{ $t(`features.${feature.text}`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          icon: 'code',
          title: 'coding.title',
          text: 'coding.text',
        },
        {
          icon: 'swatch',
          title: 'front-end.title',
          text: 'front-end.text',
        },
        {
          icon: 'server',
          title: 'deployment.title',
          text: 'deployment.text',
        },
        {
          icon: 'framework',
          title: 'framework.title',
          text: 'framework.text',
        },
        {
          icon: 'seo',
          title: 'seo.title',
          text: 'seo.text',
        },
        {
          icon: 'operating-system',
          title: 'operating-system.title',
          text: 'operating-system.text',
        },
      ],
    }
  },
}
</script>
