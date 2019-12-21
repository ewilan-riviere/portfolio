import Vue from 'vue'

function getTextContent(slug) {
  if (this.$store.state.api.texts !== undefined) {
    let infoData = ''
    const dataApiInfo = this.$store.state.api.texts.data
    for (let index = 0; index < dataApiInfo.length; index++) {
      const element = dataApiInfo[index]
      if (element.slug === slug) {
        infoData = element.text
      }
    }
    return infoData
  }
  return null
}

// this is to help Webstorm with autocomplete

Vue.prototype.$textContent = getTextContent
