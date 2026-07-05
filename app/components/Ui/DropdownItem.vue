<template>
  <button
    type="button"
    :class="itemClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  danger?: boolean
}>(), {
  danger: false
})

defineEmits<{
  click: []
}>()

const itemClasses = computed(() => [
  'block w-full px-4 py-2 text-left text-sm transition-colors',
  props.danger
    ? 'text-red-600 hover:bg-red-50'
    : 'text-slate-700 hover:bg-slate-100'
])
</script>
