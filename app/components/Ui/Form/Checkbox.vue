<template>
  <div class="flex items-start gap-3">
    <input
      :id="checkboxId"
      :name="name"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :required="required"
      :aria-label="label"
      class="mt-1 h-5 w-5 rounded border-slate-300 text-brand-primary focus:ring-4 focus:ring-brand-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >

    <label
      :for="checkboxId"
      class="cursor-pointer text-slate-700"
    >
      {{ label }}
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: boolean
  id?: string
  name?: string
  label: string
  disabled?: boolean
  required?: boolean
}>(), {
  modelValue: false,
  id: undefined,
  name: undefined,
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const generatedId = useId()
const checkboxId = computed(() => props.id ?? `checkbox-${generatedId}`)
</script>