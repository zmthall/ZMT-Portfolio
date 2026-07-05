<template>
  <div class="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
    <div
      v-if="icon"
      class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-2xl"
    >
      {{ icon }}
    </div>

    <h3 class="text-2xl font-bold text-slate-900">
      {{ title }}
    </h3>

    <p
      v-if="description"
      class="mx-auto mt-3 max-w-2xl leading-7 text-slate-600"
    >
      {{ description }}
    </p>

    <div
      v-if="$slots.default"
      class="mt-6 flex justify-center"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  icon?: string
}>()
</script>
