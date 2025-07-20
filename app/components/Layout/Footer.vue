<template>
  <div class="h-20 bg-zinc-800">
    <nav class="flex h-full">
      <ul class="flex gap-3 border-r-2 border-r-white/20 px-4">
        <li v-for="link in iconLinks" :key="link.href">
          <a v-if="!link.externalLink" :href="link.href" class="flex items-center text-zinc-200 hover:text-zinc-400 hover:scale-[120%] transition-all duration-500 ease-in-out h-full"><Icon :name="link.icon" class="h-full w-12"/></a>
          <a v-else :href="link.href" target="_blank" rel="noopener nofollow noreferrer" class="flex items-center text-zinc-200 hover:text-zinc-400 hover:scale-[120%] transition-all duration-500 ease-in-out h-full"><Icon :name="link.icon" class="h-full w-12"/></a>
        </li>
      </ul>
      <ul class="flex items-center px-4 gap-4 text-2xl font-bold text-zinc-200">
        <li>
          <NuxtLink to="/learning">My Learning</NuxtLink>
        </li>
        <li>
          <NuxtLink to="blog">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>

const iconLinks = useStatic().iconLinks;

</script>

<style>

</style>