<template>
  <div class="space-y-2">
    <div
      v-if="label"
      class="flex items-center justify-between text-sm font-semibold text-slate-700"
    >
      <span>{{ label }}</span>
      <span>{{ safeValue }}%</span>
    </div>

    <div class="h-3 overflow-hidden rounded-full bg-slate-200">
      <div
        class="h-full rounded-full bg-brand-primary transition-all duration-300"
        :style="{ width: `${safeValue}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: number
  label?: string
}>(), {
  label: undefined
})

const safeValue = computed(() => Math.min(100, Math.max(0, props.value)))
</script>
