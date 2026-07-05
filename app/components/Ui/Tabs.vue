<template>
  <div class="space-y-6">
    <div class="flex flex-wrap gap-2 border-b border-slate-200">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        :class="tabButtonClasses(tab.value)"
        @click="emit('update:modelValue', tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>

    <slot :active-tab="modelValue" />
  </div>
</template>

<script setup lang="ts">
type TabItem = {
  label: string
  value: string
}

const props = defineProps<{
  modelValue: string
  tabs: TabItem[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const tabButtonClasses = (value: string) => [
  'border-b-2 px-4 py-3 text-sm font-semibold transition-colors',
  props.modelValue === value
    ? 'border-brand-primary text-brand-primary'
    : 'border-transparent text-slate-500 hover:text-slate-900'
]
</script>
