<template>
  <div class="relative my-3 md:my-20">
    <div
      class="
        lg:mx-auto
        lg:max-w-7xl
        lg:px-8
        lg:grid
        lg:grid-cols-2
        lg:grid-flow-col-dense
        lg:gap-24
      "
    >
      <div
        :class="[
          {
            'max-w-xl px-4 lg:py-16': positionImage === 'right',
          },
          {
            'lg:py-32 lg:col-start-2': positionImage === 'left',
          },
        ]"
        class="mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0"
      >
        <div class="py-20">
          <div>
            <div class="flex items-center">
              <svg-icon
                :name="icon"
                class="w-12 h-12"
                :style="`color: ${color}`"
              />
              <div class="flex items-center justify-between w-full">
                <slot name="title" />
              </div>
            </div>
            <p class="mt-4 text-lg text-gray-500">
              <slot name="text" />
            </p>
          </div>
          <slot name="cta" />
        </div>
        <div v-if="blockquote" class="pt-6 mt-8 border-t border-gray-200">
          <blockquote>
            <div>
              <p class="text-base text-gray-500">
                &ldquo;{{ blockquote.text }}&rdquo;
              </p>
            </div>
            <footer class="mt-3">
              <div class="flex items-center space-x-3">
                <div class="text-base font-medium text-gray-700">
                  {{ blockquote.author }}
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div
        :class="{
          'lg:col-start-1': positionImage === 'left',
        }"
        class="mt-12 sm:mt-16 lg:mt-0 hidden md:block"
      >
        <div
          class="
            pl-4
            -mr-48
            sm:pl-6
            md:-mr-16
            lg:px-0 lg:m-0 lg:relative lg:h-full
          "
        >
          <app-img
            v-if="image"
            :class="[
              { 'lg:left-0': positionImage === 'right' },
              { 'lg:right-0': positionImage === 'left' },
            ]"
            class="
              w-full
              rounded-xl
              lg:absolute lg:h-full lg:w-auto lg:max-w-none
            "
            :src="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureHighlighted',
  props: {
    positionImage: {
      type: String,
      default: 'right',
      validator: (val) => ['left', 'right'].includes(val),
    },
    blockquote: {
      type: Object,
      default: () => {},
    },
    icon: {
      type: String,
      default: 'book',
    },
    image: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
}
</script>
