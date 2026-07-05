<template>
  <footer>
    <!-- Main Footer -->
    <div class="w-full bg-zinc-800">
      <nav class="flex min-h-20 flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:justify-start sm:gap-0 sm:py-0">
        <ul class="flex gap-3 px-4 sm:h-20 sm:border-r-2 sm:border-r-white/20">
          <li v-for="link in iconLinks" :key="link.href">
            <a
              :href="link.href"
              :target="link.externalLink ? '_blank' : undefined"
              :rel="link.externalLink ? 'noopener nofollow noreferrer' : undefined"
              class="flex items-center text-zinc-200 transition-all duration-500 ease-in-out hover:scale-110 hover:text-brand-primary sm:h-full"
            >
              <Icon :name="link.icon" class="h-12 w-12" />
            </a>
          </li>
        </ul>

        <!-- Desktop / tablet policy links -->
        <ul class="hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-sm font-medium text-zinc-300 sm:flex">
          <li v-for="policyLink in policyLinks" :key="policyLink.to">
            <NuxtLink
              :to="policyLink.to"
              class="transition-colors duration-300 hover:text-brand-primary"
            >
              {{ policyLink.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Copyright + mobile policy links -->
    <div class="border-t border-white/10 bg-zinc-900 px-4">
      <LayoutContainer class="space-y-4 py-5 text-center text-sm text-zinc-400 mx-auto">
        <!-- Mobile policy links -->
        <ul class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-300 sm:hidden">
          <li v-for="policyLink in policyLinks" :key="policyLink.to">
            <NuxtLink
              :to="policyLink.to"
              class="transition-colors duration-300 hover:text-brand-primary"
            >
              {{ policyLink.label }}
            </NuxtLink>
          </li>
        </ul>

        <p>
          © {{ currentYear }} Zachary Thallas. All rights reserved.
        </p>

        <p>
          Designed &amp; Developed with
          <span class="font-semibold text-brand-primary">
            Nuxt 3, Vue, TypeScript &amp; Tailwind CSS
          </span>
        </p>
      </LayoutContainer>
    </div>
  </footer>
</template>

<script setup lang="ts">
const iconLinks = useStatic().iconLinks

const currentYear = new Date().getFullYear()

const policyLinks = [
  {
    label: 'Privacy Policy',
    to: '/privacy-policy'
  },
  {
    label: 'Terms & Conditions',
    to: '/terms-and-conditions'
  },
  {
    label: 'Accessibility',
    to: '/accessibility'
  },
  {
    label: 'Cookie Policy',
    to: '/cookie-policy'
  }
]
</script>