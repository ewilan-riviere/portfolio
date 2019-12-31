<template>
  <div id="about">
    <div class="center text-center">
      <div class="dirty-unicorn-loading">
        <div class="dirty-unicorn-circle"></div>
        <div class="dirty-unicorn"></div>
      </div>
      <!-- <Logo /> -->
      <div class="white-text">
        <p class="font-morpheus about-title">
          {{ title }}
        </p>
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '@/components/pages/about/Logo.vue'

export default {
  components: {
    // Logo
  },
  data() {
    return {
      title: 'À propos',
      text: 'text'
    }
  }
}
</script>

<style lang="scss">
#about {
  .center {
    padding: 10rem 0;
    margin: auto;
    float: none;
    display: table;
    .about-title {
      font-size: 4rem;
      font-weight: bold;
    }
    .dirty-unicorn-loading {
      display: flex;
      justify-content: center;
      $size: 20rem;
      $unicorn-width: $size;
      $unicorn-height: $size;

      .dirty-unicorn-circle {
        background-repeat: no-repeat;
        position: absolute;
        z-index: 0;
        height: $unicorn-height;
        width: $unicorn-width;
        background-size: contain;
        background-position-x: center;
        -webkit-animation: spin 20s linear infinite;
        -moz-animation: spin 20s linear infinite;
        animation: spin 20s linear infinite;
        background-image: url('../../static/images/logos/dirty_unicorn_circle.png');
        @keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      }

      .dirty-unicorn {
        position: relative;
        z-index: 1;
        background-repeat: no-repeat;
        height: $unicorn-height;
        width: $unicorn-width;
        background-size: contain;
        background-position-x: center;
        background-image: url('../../static/images/logos/dirty_unicorn_only.png');
      }
    }
  }
}
</style>
