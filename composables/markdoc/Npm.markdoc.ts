import { h } from 'vue'
import Code from './Code.markdoc'

export default {
  name: 'Npm',
  props: {
    name: String,
    dev: Boolean,
  },
  setup(props: { name: string; dev: boolean }) {
    const tools = [
      'npm install',
      'pnpm install',
      'yarn add',
    ]

    return () => h('div', [
      tools.map((item) => {
        return h(Code, { language: 'bash', code: `${item} ${props.name} ${props.dev ? '-D' : ''}` })
      }),
    ])
  },
}
