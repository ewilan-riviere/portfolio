import { h } from 'vue'

export default {
  name: 'Heading',
  props: {
    level: Number,
  },
  setup(props: { level: number }, { slots }: any) {
    const htmlSlot = ref<HTMLElement>()
    const id = ref<string>()
    const title = ref<string>()

    onMounted(() => {
      title.value = htmlSlot.value?.textContent || ''
      id.value = title.value.toLowerCase().replace(/\s/g, '-')
    })

    return () => h(`h${props.level}`, { id: id.value }, [
      h('span', { class: 'sr-only', ref: htmlSlot }, [slots.default()]),
      title.value,
    ])
  },
}
