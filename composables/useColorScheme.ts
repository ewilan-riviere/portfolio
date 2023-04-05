export function useColorScheme() {
  const isDark = ref(false)
  const csStorage = 'color-scheme'

  const toggle = () => {
    isDark.value = !isDark.value
    const root = document.documentElement.classList
    root.remove('dark', 'light')

    if (isDark.value)
      root.add('dark')
    if (!isDark.value)
      root.add('light')

    if (process.client)
      localStorage.setItem(csStorage, isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    isDark.value = localStorage.getItem(csStorage) === 'dark'
  })

  return {
    isDark,
    toggle,
  }
}
