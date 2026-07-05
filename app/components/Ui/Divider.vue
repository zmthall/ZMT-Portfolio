<template>
  <div class="flex items-center gap-5">
    <div
      class="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-200"
    />

    <span
      class="rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 shadow-sm"
    >
      {{ label }}
    </span>

    <div
      class="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-200"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>