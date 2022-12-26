import type { Ref } from 'vue'

interface Options {
  rootMargin?: string
  threshold?: number | number[]
  root?: Element | Document | null
  reactive?: boolean
  duration?: number
}

const defaultOpts: Options = {
  rootMargin: '0px 0px 0px 0px' as IntersectionObserverInit['rootMargin'],
  threshold: 0 as IntersectionObserverInit['threshold'],
  root: null as IntersectionObserverInit['root'],
  reactive: false,
  duration: 400,
}

export const useAnimate = (target?: Ref<HTMLElement | undefined>, options: Options = defaultOpts) => {
  const isVisible = ref(false)
  const observerOpts: IntersectionObserverInit = {
    rootMargin: options.rootMargin,
    threshold: options.threshold,
    root: null,
  }
  const duration = ref(options.duration ?? defaultOpts.duration)

  const observerable = (observer: IntersectionObserver) => {
    if (target?.value)
      observer.observe(target.value)
  }

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement
      isVisible.value = false

      el.style.opacity = '0'
      el.style.transition = `opacity ${duration.value}ms`

      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = '100'
          isVisible.value = true
        }, duration.value! / 2)

        observer.unobserve(entry.target)
        observer.disconnect()
        if (options.reactive)
          observerable(observer)
      }
    })
  }

  const onScroll = () => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries, observer) => callback(entries, observer), observerOpts)
      observerable(observer)
    }
  }

  onMounted(() => {
    onScroll()
  })

  return {
    onScroll,
    isVisible,
  }
}
