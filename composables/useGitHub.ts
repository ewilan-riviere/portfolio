interface GitHubApi {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    html_url: string
    type: string
  }
  html_url: string
  readme_url: string
  description: string
  created_at: string
  updated_at: string
  pushed_at: string
  homepage: string
  size: number
  stargazers_count: number
  language: string
  archived: boolean
  open_issues_count: number
  license: {
    key: string
    name: string
    spdx_id: string
    url: string
    node_id: string
  }
  topics: string[]
}

interface GitHubApiContent {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content: string
  encoding: string
  _links: {
    self: string
    git: string
    html: string
  }
}

export async function useGitHub(url?: string) {
  const isGitHub = ref(false)
  const githubApi = ref<GitHubApi>()
  const githubApiReadme = ref<GitHubApiContent>()
  const readmeContents = ref<string>()

  async function parseUrl() {
    if (!url)
      return
    isGitHub.value = isGitHubUrl(url)
    if (!isGitHub.value)
      return

    const organization = extractOrganization(url)
    const repository = extractRepository(url)

    const apiUrl = `https://api.github.com/repos/${organization}/${repository}`
    // const apiUrlContent = `${apiUrl}/contents`

    const { data: api, error: apiError } = await useFetch<{ data: GitHubApi }>('/api/github', {
      query: {
        url: apiUrl,
      },
    })

    if (apiError.value) {
      console.warn(apiError.value)
      return
    }

    if (api.value) {
      githubApi.value = api.value.data
      githubApi.value.readme_url = `${api.value.data.html_url}#readme`
    }

    const apiUrlContentRaw = `https://raw.githubusercontent.com/${organization}/${repository}/main/README.md`
    const { data: contents, error: contentsError } = await useFetch<string>(apiUrlContentRaw)

    if (contentsError.value) {
      console.warn(contentsError.value)
      return
    }

    if (contents.value)
      readmeContents.value = contents.value
  }

  await parseUrl()

  return {
    isGitHub,
    githubApi,
    githubApiReadme,
    readmeContents,
  }
}

function isGitHubUrl(url: string) {
  return url.includes('github.com')
}

function extractOrganization(url: string) {
  const parts = url.split('/')
  return parts[3]
}

function extractRepository(url: string) {
  const parts = url.split('/')
  return parts[4]
}
