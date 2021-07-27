<template>
  <div class="container max-w-7xl">
    <app-title
      :eyebrow="'featuresHighlight.title.eyebrow'"
      :title="'featuresHighlight.title.title'"
      :text="'featuresHighlight.title.text'"
      position="center"
    />
    <feature-highlighted
      v-for="(feature, id) in features"
      :key="id"
      :image="feature.image"
      :icon="feature.icon"
      :color="feature.color"
      :position-image="id % 2 !== 0 ? 'left' : 'right'"
    >
      <template #title>
        <h2
          class="
            ml-3
            text-3xl
            font-semibold
            tracking-tight
            dark:text-gray-100
            font-handlee
          "
          :style="`color: ${$hex2rgb(feature.color)}`"
        >
          {{ $t(feature.title) }}
        </h2>
        <span
          class="
            inline-flex
            items-center
            px-2
            py-0.5
            rounded
            text-xs
            font-medium
            text-gray-900
            dark:text-gray-100
          "
          :style="`background-color: ${$hex2rgb(feature.color, 0.2)}`"
        >
          {{ $t(feature.badge) }}
        </span>
      </template>
      <template #text>
        {{ $t(feature.text) }}
      </template>
      <template #cta>
        <app-button :color="`white`" :href="feature.cta.url" class="mt-6">
          {{ $t('featuresHighlight.discover') }}
          {{ $t(feature.title) }}
        </app-button>
      </template>
    </feature-highlighted>
  </div>
</template>

<script>
import AppTitle from '../app-title.vue'
import featureHighlighted from './feature-highlighted.vue'
export default {
  name: 'FeaturesHighlight',
  components: { featureHighlighted, AppTitle },
  data() {
    return {
      features: [
        {
          title: 'featuresHighlight.one.title',
          badge: 'featuresHighlight.one.badge',
          image: '/images/feature-1.webp',
          icon: 'features/feature-1',
          color: '#FF2D20',
          text: 'featuresHighlight.one.text',
          cta: {
            url: 'https://laravel.com/',
          },
        },
        {
          title: 'featuresHighlight.two.title',
          badge: 'featuresHighlight.two.badge',
          image: '/images/feature-2.webp',
          icon: 'features/feature-2',
          color: '#00C58E',
          text: 'featuresHighlight.two.text',
          cta: {
            url: 'https://nuxtjs.org/',
          },
        },
        {
          title: 'featuresHighlight.three.title',
          badge: 'featuresHighlight.three.badge',
          image: '/images/feature-3.webp',
          icon: 'features/feature-3',
          color: '#02569B',
          text: 'featuresHighlight.three.text',
          cta: {
            url: 'https://flutter.dev/',
          },
        },
      ],
    }
  },
}
</script>
