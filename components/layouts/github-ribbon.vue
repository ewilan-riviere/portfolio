<template>
  <div id="appInProgress">
    <a :href="appInProgressUrl" target="_blank" class="font-lautre">
      {{ appInProgressName }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'GithubRibbon',
  data() {
    return {
      appInProgressUrl:
        'https://github.com/ewilan-riviere/ewilan-riviere-portfolio-front',
      appInProgressName: 'En développement'
    }
  }
}
</script>

<style lang="scss" scoped>
$ribbon-width: 25rem;
$ribbon-height: $ribbon-width + 10rem;
$ribbon-color-bg: #000;
$ribbon-color-bg-hover: rgb(144, 30, 148);
$ribbon-color: #fff;
#appInProgress {
  @media screen and (max-width: 920px) {
    display: none;
  }
  position: fixed;
  top: 0rem;
  right: -2rem;
  min-width: $ribbon-width;
  z-index: 25;
  a {
    // Colors
    background: $ribbon-color-bg;
    color: $ribbon-color;
    // Font
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    // Position
    position: absolute;
    top: 5rem;
    left: 2rem;
    transition: 0.5s;
    width: $ribbon-height;
    padding: 1rem 5.5rem 1rem 1rem;
    // Rotate ribbons
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
    &:hover {
      background: $ribbon-color-bg-hover;
    }
    &::before,
    &::after {
      content: '';
      width: 100%;
      display: block;
      position: absolute;
      top: 1px;
      left: 0;
      height: 1px;
      background: #fff;
    }
    &::after {
      bottom: 1px;
      top: auto;
    }
  }
}
</style>
