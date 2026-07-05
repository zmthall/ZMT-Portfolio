<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[buttonClasses, stylingClasses]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'brand' | 'secondary' | 'blank'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    stylingClasses?: string
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
    stylingClasses: ''
  }
)

const buttonClasses = computed(() => {
  const base =
    'inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50'

  switch (props.variant) {
    case 'brand':
      return `${base} bg-brand-primary text-white border-2 border-brand-primary hover:bg-brand-primary/90`

    case 'secondary':
      return `${base} border-2 border-slate-300 bg-slate-200 text-slate-800 hover:bg-slate-300`

    case 'blank':
      return `${base} bg-transparent text-slate-700 hover:text-brand-primary`

    case 'primary':
    default:
      return `${base} border-2 border-white bg-zinc-800 text-white hover:bg-white hover:text-zinc-800`
  }
})
</script>