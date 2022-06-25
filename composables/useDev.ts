export const useDev = () => {
  const isDev = useNuxtApp()._legacyContext?.isDev

  return {
    isDev,
  }
}
