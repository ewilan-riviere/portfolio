import Vue from 'vue'

// Capitalize first character
const capitalize = (s = '') => {
  s = s.toLowerCase()
  return s[0].toUpperCase() + s.slice(1)
}

Vue.prototype.$capitalize = capitalize

// Format date from API
const formatDate = (date) => {
  date = new Date(date)

  let userLang = 'en'

  if (process.client) {
    userLang = navigator.language || navigator.userLanguage
  }

  return date.toLocaleString(userLang, {
    year: 'numeric',
    month: 'long',
  })
}
Vue.prototype.$formatDate = formatDate

// Limit length of string
const overflow = (text, maxLength = 25) => {
  if (text) {
    let overflow = text
    if (text.length > maxLength) {
      overflow = text.substring(0, maxLength)
      overflow = `${overflow}...`
    }
    return overflow
  }
  return ''
}

Vue.prototype.$overflow = overflow

// Slugify string
const slugify = (text) => {
  if (text !== null && text !== undefined) {
    return text
      .toString()
      .toLowerCase()
      .replace(/["']/i, '-')
      .replace(/\s+/g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '')
  }
}

Vue.prototype.$slugify = slugify

const hex2rgb = (c, o = 1) =>
  `rgba(${c.match(/\w\w/g).map((x) => +`0x${x}`)},${o})`

Vue.prototype.$hex2rgb = hex2rgb

const rgb2hex = (c) =>
  '#' + c.match(/\d+/g).map((x) => (+x).toString(16).padStart(2, 0)).join``

Vue.prototype.$rgb2hex = rgb2hex
