declare module '*.md' {
  import type { RenderableTreeNode } from '@markdoc/markdoc'

  const Node: RenderableTreeNode
  export default Node
}

declare module '*.md?html' {
  const html: string
  export default html
}
