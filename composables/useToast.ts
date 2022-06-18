import { Toast } from "~~/class/toast"
import { useToastStore } from "~~/store/toast"

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
