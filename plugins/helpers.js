import Vue from 'vue'

const limitLength = (string, length = 150) => {
  if (string !== null && string !== undefined && string.length > length) {
    return `${string.substring(0, length)}...`
  } else {
    return string
  }
}

Vue.prototype.$limitLength = limitLength
