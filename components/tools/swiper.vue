<template>
  <div class="vue-swiper">
    <slot name="header"></slot>
    <div ref="swiperContainer" class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div
        ref="swiperPagination"
        v-if="withPagination"
        :class="{ 'd-none': paginationWhenJustOne }"
        class="swiper-pagination"
      ></div>
    </div>
    <!-- Swipper btn PREV -->
    <div
      ref="swiperButtonPrev"
      v-if="canPrev"
      @click="onPrevSlide"
      class="swiper-button-prev shadow-sm"
    >
      <icon-base
        name="arrow-right"
        width="24"
        height="24"
        variant=""
        class="arrow-left"
      ></icon-base>
    </div>
    <!-- Swipper btn NEXT -->
    <div
      ref="swiperButtonNext"
      v-if="canNext"
      :class="{
        'is-end': endReached
      }"
      @click="onNextSlide"
      class="swiper-button-next shadow-sm"
    >
      <icon-base
        name="arrow-right"
        width="24"
        height="24"
        variant=""
      ></icon-base>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Swiper',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    withPagination: {
      type: Boolean,
      default: false
    },
    canPrev: {
      type: Boolean,
      default: false
    },
    canNext: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiper: null,
      endReached: false,
      paginationWhenJustOne: false
    }
  },
  watch: {
    swiper() {
      this.swiper.on('reachEnd', () => {
        this.endReached = true
      })
    }
  },
  mounted() {
    this.init()
    this.pagination()
  },
  methods: {
    pagination() {
      if (this.$refs.swiperPagination !== undefined) {
        const pagination = this.$refs.swiperPagination
        if (pagination.childElementCount <= 1) {
          this.paginationWhenJustOne = true
        }
      }
    },
    init() {
      this.swiper = new Swiper(this.$refs.swiperContainer, this.config)
    },
    update() {
      this.$nextTick(() => {
        this.swiper.update()
      })
    },
    onNextSlide() {
      // Si arrivé en fin de slide alors retour slide start
      if (this.endReached) {
        this.swiper.slideTo(0, 1000, false)
        this.endReached = false
        return
      }
      this.swiper.slideNext()
    },
    onPrevSlide() {
      this.swiper.slidePrev()
    }
  },
  destroy() {
    if (this.swiper) {
      this.swiper.destroy()
    }
  }
}
</script>

<style lang="scss">
.vue-swiper {
  position: relative;
}
.swiper-button-next-disabled,
.swiper-button-next,
.swiper-button-prev-disabled,
.swiper-button-prev {
  // display: none;
}

.swiper-pagination-bullet-active {
  background-color: gray;
}
.swiper-pagination {
  position: relative;
  margin-top: 0.8rem;
}

.arrow-left {
  top: 1rem;
  left: 1rem;
  transform: rotate(180deg);
}

// FIX/HACK bug swiper perte de classe de pagination bullet quand enReached à true...
:v-deep .swiper-container-horizontal > .swiper-pagination {
  bottom: 10px;
  left: 0;
  width: 100%;

  .swiper-pagination-bullet {
    margin: 0 4px;
  }
}

@media screen and (min-width: 530px) {
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus {
      outline: none !important;
    }
  }

  .swiper-button-prev {
    left: -25px;
  }
  .swiper-button-next {
    right: -25px;
    svg {
      transition: 0.5s transform;
    }
  }
}

.is-end {
  svg {
    transform: rotate(180deg);
  }
}
</style>
