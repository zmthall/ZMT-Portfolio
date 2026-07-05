<template>
  <span class="relative inline-flex">
    <span
      class="peer inline-flex"
      tabindex="0"
    >
      <slot />
    </span>

    <span
      class="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 peer-hover:opacity-100 peer-focus:opacity-100"
      role="tooltip"
    >
      {{ text }}
    </span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
