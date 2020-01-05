<template>
  <div class="">
    <swiper :config="swiperConfig" :with-pagination="false" class="">
      <div v-for="i in 8" :key="i" class="swiper-slide">
        a
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperConfig: {
        spaceBetween: 30,
        speed: 600,
        breakpoints: {
          1600: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          992: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.portfolio {
  // max-width: 20rem !important;
}
</style>
