<template>
  <div>
    <LayoutContainer class="px-2 lg:px-0 mx-auto space-y-20 py-16">
      <!-- Hero -->
      <section class="mx-auto max-w-4xl space-y-6 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          Portfolio
        </p>

        <h1>Selected Work</h1>

        <p class="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
          My portfolio extends beyond websites. I enjoy building digital
          experiences, streamlining business operations, and creating tools
          that solve real-world problems. These case studies showcase both the
          technical and strategic work behind the projects I've contributed to.
        </p>
      </section>

      <!-- Featured -->
      <section class="space-y-8">
        <UiDivider label="Featured Case Study" />

        <UiCard class="featured-card overflow-hidden" padding="p-3 sm:p-6">
          <div class="bg-gray-100 p-4 sm:p-6 rounded-md">
            <UiLink to="/projects/golden-gate-manor" variant="blank" styling-classes="rounded-lg block transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
              <NuxtImg
                src="/images/pages/projects/golden-gate-manor/hero.png"
                alt="Golden Gate Manor homepage"
                class="w-full rounded-xl object-cover object-top shadow-xl ring-1 ring-black/10"
              />
            </UiLink>
          </div>

          <div class="space-y-10 p-6 lg:p-10">
            <div class="space-y-6">
              <div class="space-y-2">
                <div class="flex flex-wrap items-center gap-3">

                  <h2>
                    Golden Gate Manor Inc.
                  </h2>

                  <span
                    class="rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary"
                  >
                    Ongoing Project
                  </span>

                </div>

                <div>
                  <p class="text-lg font-medium text-slate-700">
                    Multi-Division Business Platform
                  </p>
  
                  <p class="text-sm text-slate-500">
                    Transportation • Durable Medical Equipment • Assisted Living • Convenience Store
                  </p>
                </div>

              </div>

              <!-- Project Stats -->
              <div class="flex flex-wrap max-xs:justify-start max-lg:justify-center items-center gap-8 text-sm">

                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-brand-primary">
                    50+
                  </span>
                  <span class="font-bold text-gray-600">
                    Pages
                  </span>
                </div>

                <span class="text-gray-300 hidden lg:inline-block">•</span>

                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-brand-primary">
                    100+
                  </span>
                  <span class="font-bold text-gray-600">
                    Components
                  </span>
                </div>

                <span class="text-gray-300 hidden lg:inline-block">•</span>

                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-brand-primary">
                    120+
                  </span>
                  <span class="font-bold text-gray-600">
                    API Endpoints
                  </span>
                </div>

                <span class="text-gray-300 hidden lg:inline-block">•</span>

                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-brand-primary">
                    10+
                  </span>
                  <span class="font-bold text-gray-600">
                    Systems
                  </span>
                </div>

                <span class="text-gray-300 hidden lg:inline-block">•</span>

                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-brand-primary">
                    20+
                  </span>
                  <span class="font-bold text-gray-600">
                    Features
                  </span>
                </div>

              </div>

              <p class="leading-8 text-gray-600">
                Designed, developed, and continue to maintain a comprehensive
                business platform supporting multiple company divisions,
                including non-emergency medical transportation, durable medical
                equipment, assisted living, and retail operations.
              </p>

              <p class="leading-8 text-gray-600">
                Beyond the public-facing website, I created internal systems
                including consultation request workflows, employment applications,
                administrative interfaces, dynamic content management, and
                informational resources that support both customers and staff.
              </p>

            </div>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="technology in technologies"
                :key="technology"
                class="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary transition-colors duration-200 hover:bg-brand-primary hover:text-white"
              >
                {{ technology }}
              </span>
            </div>

            <div class="grid gap-10 lg:grid-cols-2">
              <div>
                <h3 class="mb-5">Key Features</h3>

                <ul class="space-y-3 text-slate-600">
                  <li>✓ Responsive multi-division business website</li>
                  <li>✓ Reusable component architecture</li>
                  <li>✓ SEO and local search optimization</li>
                  <li>✓ Performance and accessibility improvements</li>
                  <li>✓ MediDrive information center</li>
                  <li>✓ Transportation service pages</li>
                  <li>✓ Medical supply & DME catalog pages</li>
                  <li>✓ Consultation request system</li>
                  <li>✓ Online employment application</li>
                  <li>✓ Administrative interfaces</li>
                  <li>✓ News & content management</li>
                </ul>
              </div>

              <div>
                <h3 class="mb-5">
                  Contributions
                </h3>

                <ul class="space-y-3 text-slate-600">
                  <li>Front-End Development</li>
                  <li>UI / UX Design</li>
                  <li>SEO Strategy</li>
                  <li>Component Architecture</li>
                  <li>Accessibility</li>
                  <li>Performance Optimization</li>
                  <li>Internal Tool Development</li>
                  <li>Content Management</li>
                </ul>
              </div>
            </div>

            <div class="pt-2">
              <UiLink to="/projects/golden-gate-manor" variant="brand">
                View Project →
              </UiLink>
            </div>
          </div>
        </UiCard>
      </section>

      <!-- More Case Studies -->
      <section class="space-y-8">
        <UiDivider label="More Case Studies" />

        <div class="grid gap-6 lg:grid-cols-3">
          <UiCard
            v-for="project in projects"
            :key="project.title"
            class="project-card group flex h-full flex-col overflow-hidden"
            padding="p-6"
          >
            <div class="overflow-hidden rounded-t-xl bg-gray-100">
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div class="flex flex-1 flex-col space-y-4 pt-6">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
                {{ project.type }}
              </p>

              <h3>
                {{ project.title }}
              </h3>

              <p class="flex-1 text-slate-600">
                {{ project.description }}
              </p>

              <UiLink :to="project.to">
                Learn More →
              </UiLink>
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Future -->
      <section class="mx-auto max-w-4xl space-y-5 text-center">
        <h2>Currently Building</h2>

        <p class="mx-auto max-w-3xl leading-8 text-gray-600">
          I'm continually expanding this portfolio with additional case studies,
          development write-ups, open-source work, and new business solutions.
          Each addition focuses not only on the finished product, but also the
          decisions, challenges, and lessons learned throughout the process.
        </p>
      </section>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ProjectsPage'
})

const technologies = [
  'Nuxt 3',
  'Vue 3',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'SEO'
]

const projects = [
  {
    title: 'Internal Business Systems',
    type: 'Admin Platform',
    image: '/images/pages/projects/internal-tools/admin-dashboard.png',
    description:
      'Administrative dashboards, correspondence tools, hiring workflows, consultation requests, and internal systems designed to improve daily operations.',
    to: '/projects/internal-tools'
  },
  {
    title: 'Secure Referral Portal',
    type: 'Healthcare Platform',
    image: '/images/pages/projects/referral-portal/hero.png',
    description:
      'A secure referral platform allowing healthcare providers to submit encrypted referrals, documentation, and prescriptions while streamlining communication with the medical supply team.',
    to: '/projects/referral-portal'
  },
  {
    title: 'Portfolio Website',
    type: 'Personal Website',
    image: '/images/pages/projects/portfolio/homepage.png',
    description:
      'A modern Nuxt 3 portfolio built to showcase selected work through polished project pages and detailed case studies.',
    to: '/projects/portfolio'
  }
]
</script>

<style scoped>
.featured-card,
.project-card {
  background: #ffffff;
  color: #334155;
  box-shadow: 0 20px 40px rgb(15 23 42 / 0.12);
  border: 1px solid rgb(226 232 240);
}

.featured-card :deep(h2),
.featured-card :deep(h3),
.project-card :deep(h3) {
  color: #1e293b;
}
</style>