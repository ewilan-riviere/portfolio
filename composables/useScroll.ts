export function useScroll() {
  const isScroll = ref(false)

  const handleScroll = () => {
    if (window.scrollY > 50)
      isScroll.value = true
    else isScroll.value = false
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScroll,
    handleScroll,
  }
}
