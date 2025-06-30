<template>
  <div class="bg-zinc-800 py-2 px-4 flex justify-between items-center sticky top-0 z-19 shadow-header">
    <HeaderLogo />
    <nav>
      <ul class="flex gap-8 text-white font-bold text-xl">
        <li v-for="link in links" :key="link.label">
          <NuxtLink :to="link.to" class="hover:text-zinc-400">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "HeaderNav"
})

const links = [
  { to: '/', label: 'Home'},
  { to: '/resume', label: 'My Resume' },
  { to: '/projects', label: 'My Projects'},
  { to: '/about-me', label: 'About Me' },
  { to: '/contact-me', label: 'Contact Me' }
]

</script>

<style>

</style>