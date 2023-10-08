import type { ContentItem } from 'server/content/Content'

export async function useContent(path: string) {
  const item = ref<ContentItem>()
  const html = ref<string>()

  const { fetchData } = useApi()
  const { locale } = useI18n()

  const md = await fetchData<{ data: ContentItem }>('/api/content', { locale: locale.value, path, find: true })

  if (md) {
    html.value = md.data.content
    item.value = {
      content: md.data.content,
      frontmatter: md.data.frontmatter,
      path: md.data.path,
      title: md.data.title,
      slug: md.data.slug,
    }

    if (process.client) {
      const { value } = await useMarked(md?.data.content)
      html.value = value
    }
  }

  return {
    item,
    html,
  }
}
