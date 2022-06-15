export const isDark = () => {
  let isDark = false

  if (process.client) {
    if (colorScheme) {
      isDark = colorScheme === "dark"
      document.documentElement.classList.toggle(colorScheme, true)
    } else {
      const system =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      document.documentElement.classList.toggle(system, true)
      isDark = system === "dark"
    }
  }

  return isDark
}
