import { getItems } from '~/server/markdoc'

export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event)
  const filter = queryParams.filter as string | undefined
  const content = queryParams.content === 'true'

  return {
    status: 200,
    data: await getItems(event, content, filter),
  }
})
