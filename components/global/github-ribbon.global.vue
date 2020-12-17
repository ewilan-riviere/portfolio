<template>
  <a
    :href="wipUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="github-ribbon github-ribbon__bg github-ribbon__right font-ptsans-regular"
  >
    {{ wip }}
  </a>
</template>

<script>
export default {
  name: 'GithubRibbon',
  data() {
    return {
      wipUrl: 'https://github.com/ewilan-riviere/portfolio-front',
      wip: 'En développement',
    }
  },
}
</script>

<style lang="postcss" scoped>
.github-ribbon {
  @apply text-center font-bold text-base p-3 fixed;
  width: 600px;
  text-decoration: none;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 1000;
  &:after {
    @apply border border-gray-300 border-opacity-90 relative block top-3 left-0;
    content: '';
    width: 600px;
  }
  &:before {
    @apply border border-gray-300 border-opacity-90 relative block bottom-3 left-0;
    content: '';
    width: 600px;
  }
  &.github-ribbon__right {
    top: 15px;
    right: -270px;
    /* top - right = width / 2 */
    -webkit-transform: rotate(45deg) translateY(100%);
    transform: rotate(45deg) translateY(100%);
  }

  &.github-ribbon__bg {
    @apply bg-gray-900 bg-opacity-90 transition-colors duration-300 text-white;
  }
  &.github-ribbon__bg:hover {
    @apply bg-purple-900 bg-opacity-90;
  }
}
</style>
