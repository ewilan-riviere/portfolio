import type { MarkdocFile } from '~/types/markdoc'
import { getItems } from '~/server/markdoc'

export default defineEventHandler(async (event) => {
  const items = await getItems(event, true)

  const queryParams = getQuery(event)
  const slug = queryParams.slug as string | undefined

  const data = items as MarkdocFile[]
  const item = data.find(item => item.slug === slug)

  return {
    status: 200,
    data: item,
  }
})
