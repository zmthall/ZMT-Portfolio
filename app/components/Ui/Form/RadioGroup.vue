<template>
  <div class="space-y-3">
    <label
      v-for="option in options"
      :key="option.value"
      class="flex cursor-pointer items-center gap-3"
    >
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        :disabled="disabled || option.disabled"
        class="h-5 w-5 border-slate-300 text-brand-primary focus:ring-4 focus:ring-brand-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
        @change="emit('update:modelValue', option.value)"
      >

      <span class="text-slate-700">
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

withDefaults(defineProps<{
  modelValue?: string
  name: string
  options: RadioOption[]
  disabled?: boolean
}>(), {
  modelValue: '',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>