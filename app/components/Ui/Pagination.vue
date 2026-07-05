<template>
  <div class="flex flex-wrap items-center justify-between gap-4">
    <p class="text-sm text-slate-500">
      Page {{ page }} of {{ totalPages }}
    </p>

    <div class="flex gap-2">
      <UiButton
        variant="secondary"
        :disabled="page <= 1"
        @click="emit('update:page', page - 1)"
      >
        Previous
      </UiButton>

      <UiButton
        variant="secondary"
        :disabled="page >= totalPages"
        @click="emit('update:page', page + 1)"
      >
        Next
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: number
  totalPages: number
}>()

const emit = defineEmits<{
  'update:page': [value: number]
}>()
</script>
