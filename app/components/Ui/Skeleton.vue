<template>
  <div
    :class="[
      'animate-pulse rounded-lg bg-slate-200',
      width,
      height,
      stylingClasses
    ]"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  width?: string
  height?: string
  stylingClasses?: string
}>(), {
  width: 'w-full',
  height: 'h-4',
  stylingClasses: ''
})
</script>
