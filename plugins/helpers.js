import Vue from 'vue'

const limitLength = (string, length = 150) => {
  if (string !== null && string !== undefined && string.length > length) {
    string = string.substring(0, length)
    string = string.trim()
    return `${string}...`
  } else {
    return string
  }
}

Vue.prototype.$limitLength = limitLength

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

Vue.prototype.$capitalize = capitalize

const getDate = (date) => {
  date = new Date(date)

  let userLang = 'en'
  if (process.client) {
    userLang = navigator.language || navigator.userLanguage
  }

  // octobre 2020
  let dateToStringLocale = date.toLocaleString(userLang, {
    year: 'numeric',
    month: 'long',
  })
  dateToStringLocale = capitalize(dateToStringLocale)
  return dateToStringLocale
}

Vue.prototype.$getDate = getDate
