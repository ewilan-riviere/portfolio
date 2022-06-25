import { useI18nStore } from '~~/store/i18n'

export const useUtil = () => {
  const date = (date?: any, options?: Intl.DateTimeFormatOptions) => {
    if (!date) {
      return ''
    }
    const formatDate = new Date(date)

    let userLang = 'en'
    if (process.client) {
      userLang = navigator.language
    }

    return formatDate.toLocaleString(userLang, {
      year: 'numeric',
      month: 'long',
      ...options
    })
  }

  const checkIfDateIsSuperiorToToday = (date?: any) => {
    if (!date) {
      return false
    }
    const today = new Date()
    const dateToCheck = new Date(date)

    return dateToCheck > today
  }

  const getDomain = (url: string | undefined): URL | undefined => {
    if (url) {
      try {
        const currentUrl = new URL(url)
        return currentUrl
      } catch (error) {

      }
    }
  }

  const getList = (list: string[]) => {
    let userLang = 'en'
    if (process.client) {
      userLang = navigator.language
    }
    const format = new Intl.ListFormat(userLang, { style: 'long', type: 'conjunction' })

    return format.format(list)
  }

  const transList = (list: string[], key?: string) => {
    const i18n = useI18nStore()

    const transList: string[] = []
    list.forEach(element => {
      let translateKey = element
      if (key) {
        translateKey = `${key}.${element}`
      }
      transList.push(i18n.translate(translateKey))
    })

    return transList
  }

  return {
    date,
    checkIfDateIsSuperiorToToday,
    getDomain,
    getList,
    transList
  }
}
