import { useToastStore } from '~~/store/toast'

// class Toast {
//   title: string
//   text?: string
//   type?: ToastType
//   date?: Date
//   id?: string

//   constructor(
//     title: string,
//     text?: string,
//     type?: ToastType,
//     date?: Date,
//     id?: string
//   ) {
//     this.title = title
//     this.text = text || ''
//     this.type = type || 'default'
//     this.date = new Date()
//     this.id = Math.random().toString(36).substr(2)
//   }
// }

export const useToast = () => {
  const pushToast = (toast: Toast) => {
    const store = useToastStore()
    // const toast = new Toast(
    //   title ?? 'title',
    //   text ?? 'text',
    //   type ?? 'information'
    // )
    store.addToast(toast)
  }
  return {
    pushToast,
  }
}
