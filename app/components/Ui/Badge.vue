<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'brand' | 'dark' | 'success' | 'warning' | 'danger' | 'neutral'
}>(), {
  variant: 'brand'
})

const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]'

  const variants = {
    brand: 'border border-brand-primary/20 bg-brand-primary/10 text-brand-primary',
    dark: 'border border-slate-700 bg-slate-900 text-white',
    success: 'border border-green-200 bg-green-50 text-green-700',
    warning: 'border border-yellow-200 bg-yellow-50 text-yellow-700',
    danger: 'border border-red-200 bg-red-50 text-red-700',
    neutral: 'border border-slate-200 bg-slate-100 text-slate-600'
  }

  return `${baseClasses} ${variants[props.variant]}`
})
</script>