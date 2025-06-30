<template>
  <div class="h-[400vh]">
    <HeaderTop />
    <HeaderNav />
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