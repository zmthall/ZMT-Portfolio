<template>
  <button
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :disabled="disabled"
    :class="switchClasses"
    @click="!disabled && emit('update:modelValue', !modelValue)"
  >
    <span
      :class="knobClasses"
    />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: boolean
  disabled?: boolean
}>(), {
  modelValue: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const switchClasses = computed(() => [
  'relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/20',
  props.modelValue ? 'bg-brand-primary' : 'bg-slate-300',
  props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
])

const knobClasses = computed(() => [
  'inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200',
  props.modelValue ? 'translate-x-6' : 'translate-x-1'
])
</script>