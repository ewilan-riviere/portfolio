<template>
  <div class="py-16 lg:py-24">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="
          relative
          py-24
          px-8
          bg-primary-700
          rounded-xl
          shadow-2xl
          overflow-hidden
          lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8
        "
      >
        <div
          class="
            absolute
            inset-0
            opacity-50
            filter
            saturate-0
            mix-blend-multiply
          "
        >
          <img
            src="/images/occupation.webp"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="relative lg:col-span-1">
          <h2 class="text-4xl text-white font-extrabold">
            {{ $t('occupation.title') }}
          </h2>
          <blockquote class="mt-6 text-white">
            <p class="text-xl font-medium sm:text-2xl">
              {{ $t('occupation.text') }}
            </p>
            <footer class="mt-6">
              <p class="flex flex-col font-medium">
                <span>{{ $t('occupation.date') }}</span>
                <span>{{ $t('occupation.location') }}</span>
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Occupation',
}
</script>
