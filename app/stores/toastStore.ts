// /stores/toast.ts

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger'

export interface ToastItem {
  id: string
  title: string
  message?: string
  variant?: ToastVariant
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<ToastItem[]>([])

  const addToast = (
    toast: Omit<ToastItem, 'id'>,
    duration = 5000
  ) => {
    const id = crypto.randomUUID()

    toasts.value.push({
      id,
      ...toast
    })

    if (duration > 0) {
      setTimeout(() => removeToast(id), duration)
    }
  }

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toasts,
    addToast,
    removeToast
  }
})