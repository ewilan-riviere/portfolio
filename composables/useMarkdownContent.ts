import type { MarkdownParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'

interface Options {
  localize?: boolean
  where: QueryBuilderWhere
  limit?: number
}

export const useMarkdownContent = () => {
  const findAll = (options: Options = {
    localize: true,
    where: { _draft: false },
  }): MarkdownParsedContent[] | undefined => {
    const { locale } = useI18n()
    const { data: articles } = useAsyncData('article', () => {
      let content = queryContent<MarkdownParsedContent>('/articles')
        .where(options.where)

      if (options.limit)
        content = content.limit(options.limit)

      if (options.localize)
        content = content.locale(locale.value)

      return content.find()
    })

    return articles as unknown as MarkdownParsedContent[] | undefined
  }

  return {
    findAll,
  }
}
