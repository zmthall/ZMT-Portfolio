<template>
  <div class="bg-zinc-800 py-1 px-4 flex justify-between items-center sticky top-0 z-19 shadow-header">
    <HeaderLogo />
    <div class="flex items-center gap-4">
      <a href="tel:719-252-2700" class="flex text-white hover:text-brand-primary"><Icon name="line-md:phone-call-filled" size="40"/></a>
      <button class="flex text-white hover:text-brand-primary" :aria-expanded="navOpen" aria-label="Toggle navigation menu" @click="toggleNav"><Icon name="charm:menu-hamburger" size="40" /></button>
    </div>
    <teleport to='body'>
      <transition name="nav-backdrop">
        <div v-if="navOpen" class="z-29 fixed top-0 left-0 bg-black/40 h-full w-full backdrop-blur-lg md:hidden" @click="toggleNav" />
      </transition>
      <transition name="nav-drawer">
        <div v-if="navOpen" class="w-[300px] h-full fixed top-0 right-0 bg-brand-secondary z-30 shadow-primary md:hidden">
          <button class="flex absolute top-2 right-2 text-zinc-200 hover:text-zinc-800 z-1" aria-label="Close navigation menu" @click="toggleNav"><Icon name="material-symbols:cancel-rounded" size="40" /></button>
          <div class="mb-2 pb-2">
            <div class="p-2">
              <NuxtImg src="/images/mountains.svg" preload priority class="-scale-x-100"/>
            </div>
            <div>
              <ul class="flex gap-4 justify-center">
                <li v-for="link in iconLinks" :key="link.href">
                  <a v-if="!link.externalLink" :href="link.href" class="hover:text-zinc-500"><Icon :name="link.icon" size="32" /></a>
                  <a v-else :href="link.href" target="_blank" rel="noopener noreferrer nofollow" class="hover:text-zinc-500"><Icon :name="link.icon" size="32" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="border-y-4 border-y-black/25">
            <nav>
              <ul>
                <li v-for="link in links" :key="link.label" class="h-12 text-2xl  border-b border-gray-200 last:border-b-0">
                  <NuxtLink :to="link.to" class="w-full h-full font-medium flex justify-center items-center hover:bg-brand-primary/25 transition-colors duration-500 ease-in-out mobile-links" @click="toggleNav">{{ link.label }}</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core';


const navOpen = ref<boolean>(false)

const toggleNav = () => {
  navOpen.value = !navOpen.value;
}

// Set up breakpoints
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md') // true when screen < 768px

// Watch for breakpoint changes and close nav when switching to desktop
watch(isMobile, (newVal, oldVal) => {
  // If switching from mobile to desktop, close the nav
  if (oldVal === true && newVal === false && navOpen.value) {
    navOpen.value = false
  }
})

const links = [
  { to: '/', label: 'Home'},
  { to: '/resume', label: 'My Resume' },
  { to: '/projects', label: 'My Projects'},
  { to: '/learning', label: 'My Learning'},
  { to: '/about-me', label: 'About Me' },
  { to: '/contact-me', label: 'Contact Me' }
]

const iconLinks = [
  { href: 'mailto:contact@zmtportfolio.com', icon: 'jam:envelope-f'},
  { href: 'tel:719-252-2700', icon: 'line-md:phone-call-filled'},
  { href: 'https://www.linkedin.com/in/zachary-thallas/', icon: 'tabler:brand-linkedin-filled', externalLink: true }
]

</script>

<style scoped>
.nav-backdrop-enter-active,
.nav-backdrop-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.nav-backdrop-enter-from,
.nav-backdrop-leave-to {
  opacity: 0;
}

.nav-drawer-enter-active,
.nav-drawer-leave-active {
  transition: transform 0.5s ease-in-out;
}

.nav-drawer-enter-from,
.nav-drawer-leave-to {
  transform: translateX(100%);
}

</style>