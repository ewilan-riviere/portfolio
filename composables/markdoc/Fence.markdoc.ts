import { h } from 'vue'
import hljs from 'highlight.js'
import Code from './Code.markdoc'

export default {
  name: 'Fence',
  props: {
    language: String,
  },
  setup(props: { language: string }, { slots }: any) {
    const htmlSlot = ref<HTMLElement>()
    const code = ref<string>()

    onMounted(() => {
      code.value = htmlSlot.value?.textContent || ''
    })

    return () => h('div', { style: 'position: relative;' }, [
      h('div', { class: 'sr-only', ref: htmlSlot }, [slots.default()]),
      h(Code, { language: props.language, code: code.value || '' }),
    ])
  },
}
