<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
import { useMainStore } from '~~/store/main'
// import type { MessageSchema, NumberSchema } from '@/plugins/i18n'

const { about } = useMainStore()

const show = ref(false)
const loaded = (loaded: boolean) => {
  show.value = loaded
}

// const { t, n } = useI18n<{ message: MessageSchema, number: NumberSchema }>({
//       useScope: 'global'
//     })
</script>

<template>
  <div class="relative py-8">
    <div class="absolute inset-0 z-20 parallax bg-forest-swamp gradient-top" />
    <div class="container relative z-30 h-screen">
      <div
        class="flex flex-col items-center justify-center lg:flex-row center-full w-full"
      >
        <div class="relative h-56 w-56">
          <div
            :class="show ? 'opacity-100' : 'opacity-0'"
            class="rainbow-flag absolute -z-10 inset-0 rounded-full transition-opacity duration-150"
          />
          <app-img
            src="/images/ewilan-riviere.webp"
            alt="ewilan riviere"
            class="rounded-full p-0.5"
            @loaded="loaded"
          />
        </div>
        <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0 text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl font-morpheus">
            {{ about.name }}
          </h1>
          <h2
            class="max-w-lg mx-auto mt-3 text-xl text-gray-800 dark:text-gray-200 sm:max-w-3xl lg:font-pelagiad lg:text-3xl"
          >
            {{ $t('about.professionalTitle') }}
          </h2>
          <div>
            <p>message: {{ $t('messages.hello', { name: 'ewie' }) }}</p>
            <p>currecy: {{ $n(1000, 'currency') }}</p>
          </div>
          <app-social
            class="flex justify-center lg:justify-start space-x-1 lg:space-x-3 mt-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.rainbow-flag {
  background: linear-gradient(
    180deg,
    #ff0000 0%,
    #ff9900 20%,
    #fffe13 40%,
    #059f2d 60%,
    #014fe8 80%,
    #9110a1 100%
  );
}
.transgender-flag {
  background: linear-gradient(
    180deg,
    #55cdfc 0%,
    #f7a8b8 25%,
    #ffffff 50%,
    #f7a8b8 75%,
    #55cdfc 100%
  );
}
</style>
