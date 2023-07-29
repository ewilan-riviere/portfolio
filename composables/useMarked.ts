import { marked } from 'marked'
import hls from 'highlight.js'
import 'highlight.js/styles/night-owl.css'

export async function useMarked(markdown: string | undefined) {
  const html = ref<string>()

  async function parse() {
    if (!markdown)
      return

    const rawHtml = marked.parse(markdown, { mangle: false, headerIds: false })
    html.value = rawHtml
    replacesCodeBlocks()
  }
  await parse()

  function getAllCodeBlocks() {
    const blocks = html.value?.match(/<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/g)
    return blocks
  }

  function replacesCodeBlocks() {
    const blocks = getAllCodeBlocks()
    blocks?.forEach((block) => {
      const code = block?.match(/<pre[^>]*>([\s\S]*?)<\/pre>/g)
      if (code) {
        let c = code[0]
        c = decodeHtmlEntities(c)

        // remove <pre> and </pre>
        c = c.replace(/<pre[^>]*>/g, '')
        c = c.replace(/<\/pre>/g, '')
        // remove <code> and </code>
        c = c.replace(/<code[^>]*>/g, '')
        c = c.replace(/<\/code>/g, '')
        const highlight = hls.highlightAuto(c, ['php']).value

        html.value = html.value?.replace(block, `<pre><code class="hljs">${highlight}</code></pre>`)
      }
    })
  }

  function decodeHtmlEntities(html: string): string {
    // eslint-disable-next-line n/prefer-global/process
    if (process.client)
      return html

    // const txt = document.createElement('textarea')
    // txt.innerHTML = html
    return html
  }

  return html
}
