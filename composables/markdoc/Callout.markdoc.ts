import { h } from 'vue'

type Callout = 'info' | 'warning' | 'danger' | 'success'

export default {
  name: 'Callout',
  props: {
    type: String as () => Callout,
  },
  setup(props: { type: Callout }, { slots }: any) {
    const infoSvg = '<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>'
    const warningSvg = '<svg class="h-5 w-5" fill=none stroke=currentColor stroke-width=1.5 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"stroke-linecap=round stroke-linejoin=round /></svg>'
    const dangerSvg = '<svg class="h-5 w-5" fill=none stroke=currentColor stroke-width=1.5 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"stroke-linecap=round stroke-linejoin=round /></svg>'
    const successSvg = '<svg class="h-5 w-5" fill=none stroke=currentColor stroke-width=1.5 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap=round stroke-linejoin=round /></svg>'

    const bgColors = {
      info: 'bg-blue-50 dark:bg-blue-950',
      warning: 'bg-yellow-50 dark:bg-yellow-950',
      danger: 'bg-red-50 dark:bg-red-950',
      success: 'bg-green-50 dark:bg-green-950',
    }
    const bgColor = bgColors[props.type]

    const textColors = {
      info: 'text-blue-500 dark:text-blue-300',
      warning: 'text-yellow-600 dark:text-yellow-300',
      danger: 'text-red-400 dark:text-red-300',
      success: 'text-green-400 dark:text-green-300',
    }
    const textColor = textColors[props.type]

    const labels = {
      info: 'Info',
      warning: 'Warning',
      danger: 'Danger',
      success: 'Success',
    }
    const label = labels[props.type]

    const svgs = {
      info: infoSvg,
      warning: warningSvg,
      danger: dangerSvg,
      success: successSvg,
    }
    const svg = svgs[props.type]

    const styleClass = 'px-5 py-3 rounded-md border border-gray-200 dark:border-gray-700 not-prose text-sm leading-6'
    const style = `${styleClass} ${bgColor} ${textColor}`

    return () => h('div', { class: style }, [
      h('div', { class: '' }, [
        h('div', { class: 'flex items-center space-x-2' }, [
          h('span', { innerHTML: svg }),
          h('span', label),
        ]),
        h('div', { class: 'mt-1' }, slots.default()),
      ]),
    ])
  },
}
