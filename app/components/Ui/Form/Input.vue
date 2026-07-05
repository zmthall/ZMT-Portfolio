<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :class="inputClasses"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string | number
  id?: string
  name?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  error?: boolean
}>(), {
  modelValue: '',
  type: 'text',
  id: undefined,
  name: undefined,
  placeholder: undefined,
  disabled: false,
  readonly: false,
  required: false,
  error: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClasses = computed(() => [
  'w-full rounded-xl border bg-white px-4 py-3 text-slate-800 shadow-sm transition-all duration-200',
  'placeholder:text-slate-400',
  'focus:outline-none focus:ring-4',
  props.error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
    : 'border-slate-300 focus:border-brand-primary focus:ring-brand-primary/20',
  props.disabled
    ? 'cursor-not-allowed bg-slate-100 text-slate-400'
    : ''
])
</script>