<template>
  <div class="relative inline-flex">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :class="avatarClasses"
    >

    <div
      v-else
      :class="avatarClasses"
    >
      {{ initials }}
    </div>

    <span
      v-if="status"
      :class="statusClasses"
      :aria-label="status"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  status?: 'online' | 'away' | 'busy' | 'offline'
}>(), {
  src: undefined,
  alt: '',
  name: '',
  size: 'md',
  status: undefined
})

const initials = computed(() => {
  if (!props.name) return '?'

  return props.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
})

const avatarClasses = computed(() => {
  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-11 w-11 text-sm',
    lg: 'h-16 w-16 text-lg'
  }

  return [
    'flex items-center justify-center rounded-full bg-slate-900 font-bold text-white object-cover',
    sizes[props.size]
  ]
})

const statusClasses = computed(() => {
  const colors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    offline: 'bg-slate-400'
  }

  return [
    'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white',
    props.status ? colors[props.status] : ''
  ]
})
</script>
