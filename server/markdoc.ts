import type { Dirent } from 'node:fs'
import { readFile, readdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import type { EventHandlerRequest, H3Event } from 'h3'
import { parseMarkdoc } from './markdoc-shared'
import type { MarkdocFile } from '~/types/markdoc'

export async function getItems(event: H3Event<EventHandlerRequest>, content?: boolean, filter?: string) {
  const baseUrl = `${getRequestURL(event).origin}${getRequestURL(event).pathname}`
  let items = await parseFilesMarkdoc(baseUrl)

  items = items.filter((item) => {
    if (filter && !item.path.startsWith(filter))
      return false

    if (!content)
      item.content = undefined

    return item
  })

  return items
}

export async function listFiles(directory: string | Dirent): Promise<string[]> {
  const dir = typeof directory !== 'string' ? directory.name : directory
  const dirents = await readdir(dir, { withFileTypes: true })

  const files = await Promise.all(dirents.map((dirent) => {
    const res = join(dir, dirent.name)
    return dirent.isDirectory() ? listFiles(res) : res
  }))

  return Array.prototype.concat(...files)
}

export async function parseFiles() {
  const files = await listFiles('./contents')

  const items: { path: string; content: string }[] = []
  await Promise.all(files.map(async (path) => {
    const content = await readFile(resolve(path))
    const extension = path.split('.').pop()
    if (extension !== 'md')
      return

    items.push({
      path,
      content: content.toString(),
    })
  }))

  return items
}

export async function parseFilesMarkdoc(baseUrl?: string) {
  const files = await parseFiles()

  const items: MarkdocFile[] = []
  await Promise.all(files.map(async (file) => {
    const item = parseMarkdoc(file.path, file.content, baseUrl)
    items.push(item)
  }))

  // sort by frontmatter.publishedAt if exists
  items.sort((a, b) => {
    if (!a.frontmatter.publishedAt && !b.frontmatter.publishedAt)
      return 0
    if (!a.frontmatter.publishedAt)
      return 1
    if (!b.frontmatter.publishedAt)
      return -1

    return a.frontmatter.publishedAt.getTime() - b.frontmatter.publishedAt.getTime()
  })

  // reverse order
  items.reverse()

  return items
}
