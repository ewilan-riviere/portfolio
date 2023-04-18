import type { DirectiveBinding } from 'vue'

interface Options {
  rootMargin?: string
  threshold?: number | number[]
  root?: Element | Document | null
  reactive?: boolean
  duration?: number
}

function useAnimate(el: HTMLElement, binding: DirectiveBinding<Options>) {
  const defaultOpts: Options = {
    rootMargin: '0px 0px 0px 0px' as IntersectionObserverInit['rootMargin'],
    threshold: 0 as IntersectionObserverInit['threshold'],
    root: null as IntersectionObserverInit['root'],
    reactive: false,
    duration: 400,
  }
  const options = binding.value ?? defaultOpts

  const isVisible = ref(false)
  const observerOpts: IntersectionObserverInit = {
    rootMargin: options.rootMargin,
    threshold: options.threshold,
    root: null,
  }
  const duration = ref(options.duration ?? defaultOpts.duration)
  if (binding.arg)
    duration.value = parseInt(binding.arg)

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
        if (options.reactive && el)
          observer.observe(el)
      }
    })
  }

  const onScroll = () => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries, observer) => callback(entries, observer), observerOpts)
      if (el)
        observer.observe(el)
    }
  }

  return {
    isVisible,
    callback,
    onScroll,
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate', {
    mounted(el: HTMLElement, binding: DirectiveBinding<Options>) {
      const { onScroll } = useAnimate(el, binding)
      onScroll()
    },
    getSSRProps() {
      return {}
    },
  })
})
