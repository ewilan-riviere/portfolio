export const actions = {
  getTextContent(slug) {
    if (this.$store.state.api.texts !== undefined) {
      const dataApiInfo = this.$store.state.api.texts.data
      for (let index = 0; index < dataApiInfo.length; index++) {
        const element = dataApiInfo[index]
        if (element.slug === slug) {
          this.infoData = element.text
        }
      }
    }
  }
}
