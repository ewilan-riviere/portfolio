import Vue from 'vue'

function slugify(text) {
  // eslint-disable-next-line unicorn/escape-case
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

// this is to help Webstorm with autocomplete

Vue.prototype.$slugify = slugify
