import { readFile, readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'
import type { FrontMatterItem } from '~/types'

interface QueryParam {
  path: string
  locale?: string
  find?: boolean
}

export class Content {
  protected constructor(
    protected readonly query: QueryParam,
  ) {
  }

  static async find(query: QueryParam) {
    const self = new Content({
      path: query.path,
      locale: query.locale,
      find: query.find,
    })

    if (self.query.find)
      return await self.findOne()

    return await self.findAll()
  }

  private async listFiles(dir = './content', filelist: string[] = []): Promise<string[]> {
    const files = await readdir(dir)
    for (const file of files) {
      const filepath = join(dir, file)
      const stats = await stat(filepath)
      const ext = file.split('.').pop()

      if (stats.isDirectory())
        await this.listFiles(filepath, filelist)
      else if (ext === 'md')
        filelist.push(filepath)
    }

    return filelist
  }

  private async findAll(): Promise<ContentItem[]> {
    let files = await this.listFiles()
    files = files.filter(f => f.includes(`content/${this.query.locale}/${this.query.path}`))

    if (files.length > 0) {
      const items = await Promise.all(files.map(async (file) => {
        const md = await this.parseMd(file)
        return ContentItem.make(md, file)
      })) as ContentItem[]

      const temp = [] as ContentItem[]
      items.forEach((item) => {
        if (item.frontmatter?.draft === 'true')
          return

        item.content = ''
        temp.push(item)
      })

      return temp
    }

    return []
  }

  private async findOne(): Promise<ContentItem | undefined> {
    const files = await this.listFiles()
    const file = files.find(f => f.includes(`content/${this.query.locale}/${this.query.path}.md`))
    if (!file)
      return

    const md = await this.parseMd(file)
    return ContentItem.make(md, file)
  }

  private async parseMd(file: string | undefined): Promise<string> {
    if (!file)
      return ''

    const buffer = await readFile(file, { encoding: 'utf8' })
    const content = buffer.toString()

    return content
  }
}

export class ContentItem {
  protected constructor(
    public frontmatter?: FrontMatterItem,
    public title?: string,
    public slug?: string,
    public path?: string,
    public content?: string,
  ) {
  }

  static make(content: string, path: string): ContentItem | undefined {
    const frontmatter = this.frontMatter(content)
    let filename = path.split('/').pop()
    if (filename)
      filename = filename.split('.').shift()

    return new ContentItem(
      frontmatter,
      frontmatter?.title,
      filename,
      path,
      this.removeFrontMatter(content),
    )
  }

  private static frontMatter(content: string): FrontMatterItem | undefined {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/
    const match = content.match(frontmatterRegex)

    if (!match)
      return

    const fm = match[1]

    const items: FrontMatterItem = {}

    const lines = fm.split('\n')
    for (const line of lines) {
      const [name, value] = line.split(': ')
      items[name] = value
    }

    return items
  }

  private static removeFrontMatter(content: string): string {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/
    const match = content.match(frontmatterRegex)

    if (!match)
      return content

    const fm = match[0]
    const newContent = content.replace(fm, '')
    return newContent
  }
}
