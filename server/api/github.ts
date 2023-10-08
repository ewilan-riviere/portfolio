import { ofetch } from 'ofetch'

export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event)

  const url = queryParams.url as string
  if (!url) {
    return {
      status: 400,
      data: { error: 'Missing url query parameter' },
    }
  }

  const { githubToken } = useRuntimeConfig()
  const res = await ofetch.raw(url, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  })

  return {
    status: res.status,
    message: res.statusText,
    data: res._data,
  }
})
