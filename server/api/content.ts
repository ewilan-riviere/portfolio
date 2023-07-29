import { queryParams } from '../api'
import { Content } from '../content/Content'

export default defineEventHandler(async (event) => {
  const query = queryParams(event)
  const locale = query?.get('locale') || 'en'
  const path = query?.get('path')
  const find = query?.get('find') === 'true'

  if (!path) {
    return {
      status: 400,
      body: 'Missing path',
    }
  }

  return {
    status: 200,
    data: await Content.find({
      path,
      locale,
      find,
    }),
  }
})
