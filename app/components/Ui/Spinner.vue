<template>
  <span
    :class="spinnerClasses"
    role="status"
    aria-label="Loading"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md'
})

const spinnerClasses = computed(() => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-10 w-10 border-4'
  }

  return [
    'inline-block animate-spin rounded-full border-slate-300 border-t-brand-primary',
    sizes[props.size]
  ]
})
</script>
