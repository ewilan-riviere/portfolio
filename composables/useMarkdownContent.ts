import type { MarkdownParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'

interface Options {
  localize?: boolean
  where: QueryBuilderWhere
  limit?: number
}

export const useMarkdownContent = () => {
  const findAll = (options: Options = {
    localize: true,
    where: { _draft: false },
  }): Ref<MarkdownParsedContent[] | undefined> => {
    const { locale } = useI18n()
    const { data: articles } = useAsyncData('article', () => {
      let content = queryContent<MarkdownParsedContent>('/articles')
        .where(options.where)

      if (options.limit)
        content = content.limit(options.limit)

      if (options.localize)
        content = content.locale(locale.value)

      return content
        .sort({
          createdAt: -1,
        })
        .find()
    })

    return articles as unknown as Ref<MarkdownParsedContent[] | undefined>
  }

  return {
    findAll,
  }
}
