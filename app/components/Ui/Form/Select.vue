<template>
  <select
    :id="id"
    :name="name"
    :value="modelValue"
    :disabled="disabled"
    :required="required"
    :class="selectClasses"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option
      v-if="placeholder"
      disabled
      value=""
    >
      {{ placeholder }}
    </option>

    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
type SelectOption = {
  label: string
  value: string | number
}

const props = withDefaults(defineProps<{
  modelValue?: string | number
  id?: string
  name?: string
  placeholder?: string
  options: SelectOption[]
  disabled?: boolean
  required?: boolean
  error?: boolean
}>(), {
  modelValue: '',
  id: undefined,
  name: undefined,
  placeholder: undefined,
  disabled: false,
  required: false,
  error: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectClasses = computed(() => [
  'w-full rounded-xl border bg-white px-4 py-3 text-slate-800 shadow-sm transition-all duration-200',
  'focus:outline-none focus:ring-4',
  props.error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
    : 'border-slate-300 focus:border-brand-primary focus:ring-brand-primary/20',
  props.disabled
    ? 'cursor-not-allowed bg-slate-100 text-slate-400'
    : ''
])
</script>