<template>
  <div 
    class="w-full bg-black/50 text-white rounded-2xl backdrop-blur-md text-xl"
    :class="padding ? padding : 'p-8'">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  padding?: string
}>()

</script>

<style>

</style>