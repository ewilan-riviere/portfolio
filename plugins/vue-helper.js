import Vue from 'vue'

function getTextContent(slug, data) {
  if (data !== undefined) {
    let infoData = ''
    const dataApiInfo = data
    if (dataApiInfo !== undefined) {
      for (let index = 0; index < dataApiInfo.length; index++) {
        const element = dataApiInfo[index]
        if (element.slug === slug) {
          infoData = element.text
        }
      }
    }
    return infoData
  }
  return null
}

function getApiAddress() {
  const apiAddress = process.env.BASE_URL.replace('api/', '')
  return apiAddress
}

function slugify(text) {
  // eslint-disable-next-line unicorn/escape-case
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

// this is to help Webstorm with autocomplete

Vue.prototype.$textContent = getTextContent
Vue.prototype.$apiAddress = getApiAddress
Vue.prototype.$slugify = slugify
