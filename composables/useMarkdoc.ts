import type { Config, Node as MarkdocNode } from '@markdoc/markdoc'
import { parseHeadings, parseMarkdoc, splitFrontMatter } from '~/server/markdoc-shared'
import type { MarkdocFile, MarkdocFileFrontMatter } from '~/types/markdoc'

interface UseMarkdocConfig {
  input: string | undefined
  type: 'contents' | 'api'
  component?: boolean
}

async function markdocConfig(): Promise<Config> {
  async function rendered(component: string) {
    const imported = await import(`./markdoc/${component}.markdoc.ts`) as unknown as { default: any }
    return imported.default
  }

  return {
    tags: {
      callout: {
        render: await rendered('Callout'),
        attributes: { type: { type: String } },
      },
      npm: {
        render: await rendered('Npm'),
        attributes: { name: { type: String }, dev: { type: Boolean } },
      },
    },
    nodes: {
      heading: {
        render: await rendered('Heading'),
        attributes: { level: { type: Number } },
      },
      fence: {
        render: await rendered('Fence'),
        attributes: { language: { type: String } },
      },
    },
  }
}

export async function useMarkdoc(config: UseMarkdocConfig) {
  const contents = ref<string>()
  const file = ref<MarkdocFile>()
  const frontmatter = ref<MarkdocFileFrontMatter>()
  const headings = ref<any>()
  const ast = ref<MarkdocNode>()
  const component = shallowRef()

  if (config.type === 'api') {
    const { data, error } = await useFetch('/api/markdoc/content', { query: { slug: config.input } })

    contents.value = data.value?.data.content
    file.value = parseMarkdoc(config.input!, contents.value!)

    if (error.value)
      throw error.value
  }
  else if (config.type === 'contents') {
    contents.value = config.input
  }

  if (contents.value) {
    const Markdoc = await import('@markdoc/markdoc')
    ast.value = Markdoc.parse(contents.value)
    if (config.component) {
      const mdConfig = await markdocConfig()
      const vanilla = Markdoc.transform(ast.value)
      const mdTransform = Markdoc.transform(ast.value, mdConfig)
      headings.value = parseHeadings(vanilla)
      const render: any = await import('vue-markdoc')
      component.value = render(mdTransform)
    }
  }

  if (ast.value) {
    const frontMatter = splitFrontMatter(ast.value)
    frontmatter.value = { ...frontMatter }
  }

  return {
    contents,
    file,
    frontmatter,
    headings,
    ast,
    ContentRenderer: component,
  }
}
