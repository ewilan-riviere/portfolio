import { useI18nStore } from '~~/store/i18n'

export const useUtils = () => {
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

  const getJson = <T>(json: object): T => {
    const data: T = JSON.parse(JSON.stringify(json))

    return data
  }

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const sortByDate = (a: any, b: any) => {
    const dateA = new Date(a.dateBegin).getTime()
    const dateB = new Date(b.dateBegin).getTime()

    return dateA > dateB ? 1 : -1
  }

  return {
    date,
    checkIfDateIsSuperiorToToday,
    getDomain,
    getList,
    transList,
    getJson,
    shuffleArray,
    sortByDate
  }
}
