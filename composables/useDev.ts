export const useDev = () => {
  const isDev = process.env.NODE_ENV === 'development'

  return {
    isDev
  }
}
