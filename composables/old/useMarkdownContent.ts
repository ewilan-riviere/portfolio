import type { ParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'
import type { HeadContent, Toc } from '~/types/content'

export interface Options {
  localized?: boolean
  where?: QueryBuilderWhere
  limit?: number
  first?: boolean
  allowFailed?: boolean
}

export interface Content extends ParsedContent, HeadContent {}

const optsDefault: Options = { localized: false, where: { _draft: false }, first: false, allowFailed: false }

export function useMarkdownContent() {
  const contents = ref<Content[]>()
  const content = ref<Content>()
  const toc = ref<Toc>()

  const addMetaHead = (articles: Content[]) => {
    const nuxtApp = useNuxtApp()
    const locale = nuxtApp.vueApp.config.globalProperties.$i18n.locale ?? 'en'
    const fallbackLocale = nuxtApp.vueApp.config.globalProperties.$i18n.fallbackLocale ?? 'en'

    articles.forEach((article) => {
      const fullPath = article._file?.replace(/\.md$/, '')
      const path = article._path?.substring(1)
      const fallback = article._path?.split('/') || []
      fallback.shift()
      const fallbackPath = `/${fallback.join('/')}`

      article._slugLocale = `${fullPath}`
      article._slugFallbackLocale = `${fallbackLocale}${fallbackPath}`
      article._slug = `${path}`
      article._original = article._locale === fallbackLocale
      article._link = `${article._original ? '' : `/${article._locale}`}${fallbackPath}`

      let base = article._path?.split('/') || []
      base = base.filter(item => item !== '')
      const name = base.pop()

      article.picture = `/images/blog/${name}.jpg`
      article.icon = `/images/blog/${name}-icon.webp`

      const formatter = new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' })
      article.tagsList = article.tags ? formatter.format(article.tags) : undefined
    })

    return articles
  }

  const fetchContent = async (path: string, options: Options) => {
    const { locale } = useI18n()
    let documents = queryContent<Content>(path)

    if (options.where)
      documents = documents.where(options.where)

    if (options.limit)
      documents = documents.limit(options.limit)

    if (options.localized)
      documents = documents.locale(locale.value)

    documents = documents.sort({
      createdAt: -1,
    })

    const fetching = await documents.find()

    contents.value = addMetaHead(fetching)

    return fetching
  }

  const getFullPath = (path: string) => {
    const nuxtApp = useNuxtApp()
    const i18n = nuxtApp.vueApp.config.globalProperties.$i18n
    const localeAvailables = i18n.availableLocales
    // const localeFallback = i18n.fallbackLocale

    let splitted = path.split('/')
    splitted = splitted.filter(item => item !== '')

    const locale = splitted[0] ?? undefined
    if (locale && localeAvailables.includes(locale))
      splitted.shift()

    return `/${splitted.join('/')}`
  }

  const findAll = async (path: string, options: Options = optsDefault) => {
    return await fetchContent(getFullPath(path), options)
  }

  const findOne = async (path: string, options: Options = optsDefault) => {
    const documents = await fetchContent(getFullPath(path), options)
    const document = documents[0] ? documents[0] : undefined
    content.value = document

    if (!document && !options.allowFailed) {
      const router = useRouter()
      router.push({ name: '404' })
    }

    toc.value = document?.body.toc

    return document
  }

  const getHead = (document: ParsedContent) => {
    const head = { ...document }
    delete head.body
    delete head.excerpt

    return head as unknown as HeadContent
  }

  return {
    findAll,
    findOne,
    contents,
    content,
    getFullPath,
    getHead,
    toc,
  }
}
