import type { GitApi } from '~/server/api/gitapi'

export async function useGitApi(apiUrl?: string) {
  const { data } = await useFetch<{
    status: number
    message: string
    type: string
    data: GitApi
  }>('/api/gitapi', { query: { url: apiUrl } })
  const body = data.value

  return {
    status: body?.status,
    message: body?.message,
    type: body?.type,
    git: body?.data,
  }
}
