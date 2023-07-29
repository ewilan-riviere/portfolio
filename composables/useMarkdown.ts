import type { QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'
import type { Document } from 'types'

export interface Options {
  localized?: boolean
  where?: QueryBuilderWhere
  limit?: number
  first?: boolean
  allowFailed?: boolean
}

const optsDefault: Options = {
  localized: false,
  where: { _draft: false },
  first: false,
  allowFailed: false,
}

export async function useMarkdown(path: string, opts?: Options) {
  if (!opts)
    opts = optsDefault

  const options = opts
  const documents = ref<Document[]>([])
  // const toc = ref<Toc>()

  const { locale, defaultLocale } = useI18n()

  async function fetchContent(): Promise<Document[]> {
    let d = queryContent<Document>(path)

    if (options.where)
      d = d.where(options.where)

    if (options.limit)
      d = d.limit(options.limit)

    if (options.localized)
      d = d.locale(locale.value)

    d = d.sort({
      createdAt: -1,
    })

    return await d.find()
  }
  const items = await fetchContent()

  items.forEach((item) => {
    let slug = item._file?.replace(/\.md$/, '')
    slug = slug.split('/').pop() || ''

    const l = locale.value || 'en'
    const defaultL = defaultLocale.value || 'en'

    const fallback = item._path?.split('/') || []
    fallback.shift()
    let fallbackPath = `/${fallback.join('/')}`
    if (l !== defaultL)
      fallbackPath = `/${l}${fallbackPath}`

    const link = `${fallbackPath}`

    documents.value.push({
      ...item,
      _link: link,
      _slug: slug,
    })
  })

  return {
    document: documents.value && documents.value.length > 0 ? documents.value[0] : undefined,
    documents,
  }
}
