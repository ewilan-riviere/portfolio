<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="banner in banners" :key="banner" class="swiper-slide">
        <img :src="`/images${banner}`" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: ['/background.jpg', '/background.jpg', '/background.jpg'],
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.mySwiper)
    // this.mySwiper.slideTo(3, 1000, false)
  },
}
</script>
