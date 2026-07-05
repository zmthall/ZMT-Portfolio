<template>
  <div class="space-y-2">
    <label
      v-if="label"
      :for="forId"
      class="block text-sm font-semibold text-slate-800"
    >
      {{ label }}
      <span v-if="required" class="text-brand-primary">*</span>
    </label>

    <slot />

    <p
      v-if="error"
      class="text-sm font-medium text-red-600"
    >
      {{ error }}
    </p>

    <p
      v-else-if="helper"
      class="text-sm text-slate-500"
    >
      {{ helper }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  forId?: string
  helper?: string
  error?: string
  required?: boolean
}>()
</script>