import type { ContentItem } from 'server/content/Content'
import type { ApiContent, ApiContentItem } from '~/types'

export async function useContentAll<T = ContentItem>(path: string) {
  const items = ref<ContentItem[]>([])

  const { fetchData } = useApi()
  const { locale } = useI18n()

  const list = await fetchData<ApiContent>('/api/content', { locale: locale.value, path })
  items.value = list?.data as ApiContentItem[]

  return {
    items: computed(() => items.value) as Ref<T[]>,
  }
}
