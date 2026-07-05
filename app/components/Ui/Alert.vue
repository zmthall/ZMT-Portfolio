<template>
  <div :class="alertClasses" role="alert">
    <div v-if="title" class="font-semibold">
      {{ title }}
    </div>

    <div class="leading-7">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
}>(), {
  variant: 'info',
  title: undefined
})

const alertClasses = computed(() => {
  const baseClasses = 'space-y-2 rounded-xl border p-5 text-sm shadow-sm'

  const variants = {
    info: 'border-blue-200 bg-blue-50 text-blue-800',
    success: 'border-green-200 bg-green-50 text-green-800',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
    danger: 'border-red-200 bg-red-50 text-red-800'
  }

  return `${baseClasses} ${variants[props.variant]}`
})
</script>