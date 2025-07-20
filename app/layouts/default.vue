<template>
  <div>
    <LayoutHeaderTop />
    <LayoutHeaderMainNav class="max-md:hidden"/>
    <LayoutHeaderMobileNav class="md:hidden"/>
    <slot />
    <LayoutFooter /> 
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "DefaultPages"
})

</script>

<style>

</style>