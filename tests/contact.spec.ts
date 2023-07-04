import { expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import ContactForm from '@/components/form/contact.vue'

// function mountTheForm() {
//   const wrapper = mount(ContactForm, { props: {} })
//   return wrapper
// }

vi.mock('#imports', () => {
  return {
    useRuntimeConfig() {
      return {
        public: {
          // Your public config!
        },
      }
    },
  }
})

// function findByText(wrap: VueWrapper, selector: string, text: RegExp) {
//   return wrap.findAll(selector).filter(n => n.text().match(text))
// }

it('mounts properly', () => {
  // const wrapper = mountTheForm()
  const wrapper = mount(ContactForm)
  expect(wrapper).toBeTruthy()
  // expect(wrapper.text()).toContain('Submit')

  // const buttons = wrapper.findAll('button')
  // console.log(buttons)

  // expect(button?.exists()).toBeTruthy()

  // await wrapper.vm.$nextTick()

  // const wrapper = shallowMount(MyComponent)

  // // update prop, and wait a tick to allow it to take effect

  // const button = wrapper.find('#edit-resource-modal-submit')
  // expect(button.attributes().disabled).toBeDefined() 👈
})

// test('mount component', async () => {
//   expect(ContactForm).toBeTruthy()

//   const wrapper = mount(ContactForm, {
//     props: {
//       // title: 'Guess User Age App',
//     },
//   })
//   // expect(wrapper.text()).toContain('Contact us')
// })
