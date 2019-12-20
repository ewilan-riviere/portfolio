<template>
  <div class="d-flex justify-content-center">
    <v-tooltip v-model="show" top>
      <template v-slot:activator="{ on }">
        <nuxt-link
          v-on="on"
          :class="anim ? 'animation' : ''"
          :to="logoRoute"
          class="logo-ewilan-anim"
        ></nuxt-link>
      </template>
      <span>
        <b>Portfolio</b>
      </span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    anim: Boolean,
    logoRoute: String
  },
  data() {
    return {
      show: ''
    }
  }
}
</script>

<style lang="scss">
.logo-ewilan-anim {
  border: 0.3em solid black;
  border-radius: 75%;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  -webkit-transition: -webkit-transform 0.8s ease-in-out,
    background-image 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out, background-image 0.8s ease-in-out;
  background-image: url('~static/images/logos/ewilan-logo.png');
  cursor: pointer;
}
.animation {
  animation: rotate 5s infinite;
}

@keyframes rotate {
  0% {
  }

  50% {
    background-image: url('~static/images/logos/ewilan-photo-reverse.png');
    background-color: rgba(206, 206, 206, 0.397);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  100% {
    background-image: url('~static/images/logos/ewilan-logo.png');
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}
</style>
