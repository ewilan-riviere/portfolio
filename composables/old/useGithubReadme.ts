export async function useGithubReadme(url: string | undefined, enabled: boolean = true) {
  const html = ref<string>()

  async function fetchReadme(): Promise<string | undefined> {
    if (!enabled)
      return

    if (!url)
      return

    if (!url.includes('github.com'))
      return

    let readmeUrl = url.replace('github.com', 'raw.githubusercontent.com')
    readmeUrl += '/main/README.md'

    const readmeText = await fetch(readmeUrl).then(r => r.text())
    const code = await useMarked(readmeText)

    html.value = code.value
  }
  await fetchReadme()

  return {
    html,
  }
}
