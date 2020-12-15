<template>
  <!-- <div id="appInProgress">
    <a :href="appInProgressUrl" target="_blank" class="font-lautre">
      {{ appInProgressName }}
    </a>
  </div> -->
  <a
    :href="wipUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="gh-ribbon red right font-ptsans-regular"
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
.gh-ribbon {
  width: 600px;
  text-align: center;
  font-weight: bold;
  font-size: 1em;
  padding: 10px;
  text-decoration: none;
  position: fixed;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 1000;
  &:after {
    @apply border border-gray-300;
    content: '';
    position: relative;
    display: block;
    top: 8px;
    left: 0;
    width: 600px;
  }
  &:before {
    @apply border border-gray-300;
    content: '';
    position: relative;
    display: block;
    bottom: 8px;
    left: 0;
    width: 600px;
  }
  &.right {
    top: 15px;
    right: -270px;
    /* top - right = width / 2 */
    -webkit-transform: rotate(45deg) translateY(100%);
    transform: rotate(45deg) translateY(100%);
  }

  &.red {
    @apply bg-gray-900 transition-colors duration-300 text-white;
  }
  &.red:hover {
    background-color: rgb(144, 30, 148);
    color: #ffffff;
  }
}

#appInProgress {
  /* @media screen and (max-width: 920px) {
    display: none;
  } */
  position: fixed;
  top: 0rem;
  right: -2rem;
  min-width: 25rem;
  z-index: 25;
  & a {
    background: #000;
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    position: absolute;
    top: 5rem;
    left: 2rem;
    transition: 0.5s;
    width: 25rem+10rem;
    padding: 1rem 5.5rem 1rem 1rem;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
  & a:hover {
    background: rgb(144, 30, 148);
  }
  & a::before,
  & a::after {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    height: 1px;
    background: #fff;
  }
  & a::after {
    bottom: 1px;
    top: auto;
  }
}
</style>
