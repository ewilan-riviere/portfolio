import { h } from 'vue'
import hljs from 'highlight.js'

export default {
  name: 'Code',
  props: {
    language: String,
    code: String,
  },
  setup(props: { language: string; code: string }) {
    const copied = ref(false)
    const language = ref<string>()
    const filename = ref<string>()
    const highlighted = ref<string>()

    function parseProps() {
      language.value = props.language || ''
      if (language.value && language.value.includes('[')) {
        const regex = /(\w+)\[(.+)\]/
        const match = language.value.match(regex)

        if (match) {
          language.value = match[1]
          filename.value = match[2]
        }
      }

      if (props.code)
        highlighted.value = hljs.highlightAuto(props.code, [language.value]).value
    }
    parseProps()

    function copyToClipboard(text: string): void {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
        copied.value = true
      }
      else {
        const el = document.createElement('textarea')
        el.value = text
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        copied.value = true
      }

      setTimeout(() => {
        copied.value = false
      }, 1000)
    }

    watch(() => props.code, () => {
      parseProps()
    })

    return () => h('div', { style: 'position: relative;' }, [
      h('pre', { innerHTML: highlighted.value }),
      h(
        'code',
        { style: 'position: absolute; top: 0.2rem; right: 0.5rem; background-color: transparent; font-size: 0.8rem; backdrop-filter: blur(1px);', class: '!text-white' },
        filename.value ? filename.value : language.value,
      ),
      h('button', {
        style: 'position: absolute; bottom: 0.5rem; right: 0.5rem; background-color: transparent; font-size: 0.8rem; backdrop-filter: blur(1px); display: flex; align-items: center;',
        onClick: () => copyToClipboard(props.code || ''),
      }, [
        h('span', { style: 'margin-right: 0.25rem; font-size: 0.8rem; position: absolute; right: 1rem;' }, copied.value ? 'Copied' : ''),
        h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: '1.5', stroke: 'currentColor', style: 'width: 1rem; height: 1rem;' }, [
          h(
            'path',
            { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75' },
          ),
        ]),
      ]),
    ])
  },
}
