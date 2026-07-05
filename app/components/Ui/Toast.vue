<template>
  <Teleport to="body">
    <TransitionGroup
      name="toast"
      tag="div"
      class="fixed right-4 bottom-4 z-50 space-y-3"
    >
      <output
        v-for="toast in toasts"
        :key="toast.id"
        :class="toastClasses(toast.variant)"
      >
        <div>
          <div class="font-semibold">
            {{ toast.title }}
          </div>

          <p
            v-if="toast.message"
            class="mt-1 text-sm opacity-90"
          >
            {{ toast.message }}
          </p>
        </div>

        <button
          type="button"
          class="ml-4 text-sm font-bold opacity-70 hover:opacity-100"
          aria-label="Dismiss notification"
          @click="removeToast(toast.id)"
        >
          ✕
        </button>
      </output>
    </TransitionGroup>
  </Teleport>
</template>

<script setup lang="ts">
type ToastVariant = 'info' | 'success' | 'warning' | 'danger'

type ToastItem = {
  id: string
  title: string
  message?: string
  variant?: ToastVariant
}

withDefaults(defineProps<{
  toasts?: ToastItem[]
}>(), {
  toasts: () => []
})

const emit = defineEmits<{
  remove: [id: string]
}>()

const removeToast = (id: string) => {
  emit('remove', id)
}

const toastClasses = (variant: ToastVariant = 'info') => {
  const variants = {
    info: 'border-blue-200 bg-blue-50 text-blue-900',
    success: 'border-green-200 bg-green-50 text-green-900',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-900',
    danger: 'border-red-200 bg-red-50 text-red-900'
  }

  return [
    'flex min-w-72 items-start justify-between gap-4 rounded-xl border p-4 shadow-xl',
    variants[variant]
  ]
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
</style>
