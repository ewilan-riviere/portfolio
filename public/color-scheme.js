const root = document.documentElement
const csLocal = 'color-scheme'

/**
 * Get color scheme from local storage
 *
 * @returns {string | undefined} 'dark' | 'light' | undefined
 */
const getStorage = () => localStorage.getItem(csLocal) ?? undefined

/**
 * Set color scheme to local storage
 *
 * @param {string} value
 *
 * @returns {void}
 */
const setStorage = value => localStorage.setItem(csLocal, value)

/**
 * Get system preference
 * @returns {'dark' | 'light'} 'dark' | 'light'
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 *
 */
function getSystemPreferences() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/**
 * If `color-scheme` is not set, check system preference and set it
 */
function checkStorage() {
  const scheme
    = getStorage() === undefined ? getSystemPreferences() : getStorage()
  setStorage(scheme ?? 'light')
}

/**
 * Set color scheme
 *
 * @param {'dark' | 'light'} scheme
 *
 * @example
 * setColorMode('dark')
 */
function setColorMode(scheme) {
  root.classList.remove('light', 'dark')
  root.classList.add(scheme)
  setStorage(scheme)
}

checkStorage()
setColorMode(getStorage())
