export const useMarkdown = () => {
  const loadMarkdown = (content: any): Markdown => {
    // let file = (await import(`@/content/home.md`)) as unknown as Markdown

    // return file

    return content
  }

  return {
    loadMarkdown,
  }
}