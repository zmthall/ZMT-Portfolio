<template>
  <a v-if="href" :href="href" :target="newPage ? '_blank' : undefined" :class="[buttonClasses, stylingClasses]">
    <slot />
  </a>
  <NuxtLink v-if="to" :to="to" :target="newPage ? '_blank' : undefined" :class="[buttonClasses, stylingClasses]">
    <slot/>
  </NuxtLink>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'brand' | 'blank'
  href?: string;
  to?: string;
  stylingClasses?: string;
  newPage?: boolean;
}>(), {
  href: undefined,
  to: undefined,
  variant: 'primary',
  stylingClasses: ''
})

const buttonClasses = computed(() => {
  const baseClasses = 'inline-block px-8 py-4 rounded-lg text-lg transition-colors duration-300'
  
  if (props.variant === 'primary') {
    // Starts darker zinc → hover to white background (Image 2)
    return `${baseClasses} bg-zinc-800 font-bold text-white border-2 border-white hover:bg-white hover:text-zinc-800`
  } else if (props.variant === 'secondary') {
    // Starts lighter zinc → hover to darker zinc (Image 1)  
    return `${baseClasses} bg-zinc-300 font-bold text-zinc-800 border-2 border-zinc-400 hover:bg-zinc-500 hover:text-white`
  } else if (props.variant === 'blank') {
    // Starts transparent → hover to white background (Image 3)
    return `bg-transparent`
  } else if (props.variant === 'brand') {
    return `${baseClasses} bg-brand-primary font-bold text-white border-2 border-brand-primary hover:bg-white hover:text-brand-primary`
  }

  return undefined
})

</script>