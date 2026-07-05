<template>
  <label
    :for="forId"
    class="block text-sm font-semibold text-slate-800"
  >
    <slot>
      {{ label }}
    </slot>

    <span
      v-if="required"
      class="text-brand-primary"
    >
      *
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  forId?: string
  label?: string
  required?: boolean
}>()
</script>