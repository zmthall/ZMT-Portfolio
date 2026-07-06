<template>
  <div
    class="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center transition-colors duration-200 hover:border-brand-primary"
  >
    <input
      :id="id"
      ref="fileInput"
      :name="name"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      class="hidden"
      @change="handleChange"
    >

    <button
      type="button"
      :disabled="disabled"
      class="rounded-lg bg-zinc-800 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-brand-primary disabled:cursor-not-allowed disabled:opacity-50"
      @click="fileInput?.click()"
    >
      Choose File<template v-if="multiple">(s)</template>
    </button>

    <p class="mt-3 text-sm text-slate-500">
      {{ selectedText }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  id?: string
  name?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
}>(), {
  id: undefined,
  name: undefined,
  accept: undefined,
  multiple: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: File[]]
  change: [value: File[]]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([])

const selectedText = computed(() => {
  const selectedFiles = files.value

  if (selectedFiles.length === 0) {
    return 'No file selected'
  }

  const firstFile = selectedFiles[0]

  if (selectedFiles.length === 1 && firstFile) {
    return firstFile.name
  }

  return `${selectedFiles.length} files selected`
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const selectedFiles = Array.from(target.files ?? [])

  files.value = selectedFiles

  emit('update:modelValue', selectedFiles)
  emit('change', selectedFiles)
}
</script>