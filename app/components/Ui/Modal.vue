<template>
  <Teleport to="body">
    <dialog
      ref="dialogRef"
      class="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-0 text-slate-700 shadow-2xl backdrop:bg-black/60"
      :aria-labelledby="title ? modalTitleId : undefined"
      @close="handleNativeClose"
      @click="handleBackdropClick"
    >
      <div class="p-6">
        <div class="mb-6 flex items-start justify-between gap-6">
          <div>
            <h2
              v-if="title"
              :id="modalTitleId"
              class="text-2xl font-bold text-slate-900"
            >
              {{ title }}
            </h2>

            <p v-if="description" class="mt-2 text-slate-500">
              {{ description }}
            </p>
          </div>

          <button
            type="button"
            class="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close modal"
            @click="closeModal"
          >
            ✕
          </button>
        </div>

        <slot />

        <div v-if="$slots.footer" class="mt-6 border-t border-slate-200 pt-6">
          <slot name="footer" />
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  description?: string
}>(), {
  title: undefined,
  description: undefined
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const dialogRef = ref<HTMLDialogElement | null>(null)
const modalTitleId = `modal-title-${useId()}`

const openModal = () => {
  if (dialogRef.value && !dialogRef.value.open) {
    dialogRef.value.showModal()
  }
}

const closeModal = () => {
  if (dialogRef.value?.open) {
    dialogRef.value.close()
  }
}

const handleNativeClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === dialogRef.value) {
    closeModal()
  }
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      openModal()
    } else {
      closeModal()
    }
  }
)

onMounted(() => {
  if (props.modelValue) {
    openModal()
  }
})
</script>