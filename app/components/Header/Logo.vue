<template>
  <div>
    <NuxtLink to="/" aria-label="ZT Design Logo image with link to home page" class="flex w-max">
      <NuxtImg src="/images/logo.png" height="100" format="avif" preload priority class="max-md:hidden" />
      <NuxtImg src="/images/logo.png" height="65" format="avif" preload priority class="md:hidden" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "HeaderLogo"
})

</script>

<style>

</style>