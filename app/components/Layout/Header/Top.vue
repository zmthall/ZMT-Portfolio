<template>
  <div class="max-md:hidden relative px-4 py-1 bg-zinc-300 z-20">
    <nav class="flex justify-end gap-4 items-center">
      <ul class="flex gap-4 font-extrabold text-xl">
        <li v-for="link in links" :key="link.label">
          <NuxtLink :to="link.to" class="hover:text-zinc-500 transition-colors duration-500 ease-in-out">{{ link.label }}</NuxtLink>
        </li>
      </ul>
      <ul class="flex gap-3">
        <li v-for="link in iconLinks" :key="link.href">
          <a v-if="!link.externalLink" :href="link.href" class="flex hover:text-zinc-500 hover:scale-[120%] transition-all duration-500 ease-in-out"><Icon :name="link.icon" size="24"/></a>
          <a v-else :href="link.href" target="_blank" rel="noopener nofollow noreferrer" class="flex hover:text-zinc-500 hover:scale-[120%] transition-all duration-500 ease-in-out"><Icon :name="link.icon" size="24" /></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const links = [
  { to: '/learning', label: 'My Learning' },
  { to: '/blog', label: 'Blog' },
]

const iconLinks = useStatic().iconLinks;
</script>

<style>

</style>