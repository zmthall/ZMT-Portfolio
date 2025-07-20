<template>
  <a v-if="href" :href :class="[buttonClasses]">
    <slot />
  </a>
  <NuxtLink v-if="to" :to :class="[buttonClasses]">
    <slot/>
  </NuxtLink>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
  variant: 'primary' | 'secondary'
  href?: string;
  to?: string;
}>(), {
  href: undefined,
  to: undefined,
  variant: 'primary'
})

const buttonClasses = computed(() => {
  const baseClasses = 'inline-block px-8 py-4 rounded-lg text-lg transition-colors duration-300'
  
  if (props.variant === 'primary') {
    // Starts darker zinc → hover to white background (Image 2)
    return `${baseClasses} bg-zinc-800 font-bold text-white border-2 border-white hover:bg-white hover:text-zinc-800`
  } else if (props.variant === 'secondary') {
    // Starts lighter zinc → hover to darker zinc (Image 1)  
    return `${baseClasses} bg-zinc-300 font-bold text-zinc-800 border-2 border-zinc-400 hover:bg-zinc-500 hover:text-white`
  }

  return undefined
})

</script>