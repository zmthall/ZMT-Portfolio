<template>
  <div class="h-[400vh]">
    <HeaderTop />
    <HeaderMainNav class="max-md:hidden"/>
    <HeaderMobileNav class="md:hidden"/>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "DefaultPages"
})

</script>

<style>

</style>