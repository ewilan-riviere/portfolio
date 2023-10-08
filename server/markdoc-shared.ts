import type { Node as MarkdocNode, RenderableTreeNode } from '@markdoc/markdoc'
import Markdoc from '@markdoc/markdoc'
import type { MarkdocFile } from '~/types/markdoc'

export interface HeadingItem {
  id: string
  label: string
  depth: number
  children?: HeadingItem[]
}

export function parseHeadings(node?: any, sections: HeadingItem[] = []) {
  if (!node)
    return sections

  // match all h1, h2, h3… tags
  if (node.name && typeof node.name === 'string' && node.name.match(/h\d/)) {
    const title = node.children[0]

    if (typeof title === 'string') {
      sections.push({
        id: title.replace(/\s+/g, '-').toLowerCase(),
        label: title,
        depth: Number.parseInt(node.name.slice(1)),
      })
    }
  }

  if (node.children) {
    for (const child of node.children)
      parseHeadings(child, sections)
  }

  return sections
}

export function parseMarkdoc(path: string, content: string, baseUrl?: string): MarkdocFile {
  const ast = Markdoc.parse(content)
  const document = splitFrontMatter(ast)

  path = path.replace('.md', '')
  const paths = path.split('contents/')
  path = paths[1] || paths[0]

  let slug = path.replace('.md', '')
  slug = slug.split('/').pop() as string

  return {
    path,
    slug,
    url: baseUrl ? `${baseUrl}/content?slug=${slug}` : undefined,
    frontmatter: document,
    content,
  }
}

export function splitFrontMatter(ast: MarkdocNode) {
  if (!ast.attributes || !ast.attributes.frontmatter)
    return {}

  const frontmatter = ast.attributes.frontmatter
  const lines = frontmatter.split('\n')

  const items: Record<string, string | string[] | boolean | Date | undefined> = {}

  lines.forEach((line: string) => {
    let item
    let [key, value] = line.split(/:(.*)/s)

    if (key.startsWith('#'))
      return
    value = value.trim()

    if (value.charAt(0) === '"' || value.charAt(0) === "'")
      value = value.slice(1, -1)

    if (value.charAt(0) === '[') {
      value = value.slice(1, -1)
      item = value.split(',').map(item => item.trim())
    }
    else if (value === 'true' || value === 'false') {
      item = value === 'true'
    }
    else if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
      item = new Date(value)
    }
    else {
      item = value
    }

    if (typeof item === 'string' && item === '')
      item = undefined

    items[key] = item
  })

  return items
}
