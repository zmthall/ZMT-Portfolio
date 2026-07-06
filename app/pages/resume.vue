<template>
  <div>
    <LayoutContainer class="px-2 lg:px-0 mx-auto space-y-20 py-16">
      <!-- Hero -->
      <section class="mx-auto max-w-4xl space-y-6 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          Resume
        </p>

        <h1>Zachary Thallas</h1>

        <div class="space-y-2">
          <p class="text-2xl font-semibold text-slate-700">
            Full-Stack Developer
          </p>

          <p class="text-lg text-slate-500">
            Business Systems • Healthcare Technology • UI Engineering
          </p>
        </div>

        <p class="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
          Self-taught front-end developer building production software for healthcare, transportation, and business operations. I specialize in scalable Vue/Nuxt applications, internal business systems, and modern web experiences that solve real operational problems.
        </p>

        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <UiLink
            variant="brand"
            href="/resume.pdf"
            new-page
          >
            Download Resume
          </UiLink>

          <UiLink
            variant="secondary"
            to="/contact"
          >
            Contact Me
          </UiLink>
        </div>
      </section>

      <!-- Professional Highlights -->
      <section class="space-y-8">
        <UiDivider label="Professional Highlights" />

        <UiCard class="resume-card">
          <div class="flex justify-center sm:justify-around flex-wrap gap-8 lg:grid-cols-5">
            <div
              v-for="highlight in professionalHighlights"
              :key="highlight.label"
              class="text-center"
            >
            
              <p class="text-5xl font-black text-brand-primary">
                {{ highlight.value }}
              </p>

              <p class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {{ highlight.label }}
              </p>
            </div>
          </div>
        </UiCard>
      </section>

      <!-- Skills -->
      <section class="space-y-8">
        <UiDivider label="Technical Skills" />

        <div class="grid gap-6 lg:grid-cols-3">
          <UiCard
            v-for="skillGroup in skillGroups"
            :key="skillGroup.title"
            class="resume-card space-y-6"
          >
            <div class="space-y-3">
              <h3>{{ skillGroup.title }}</h3>

              <div class="h-1 w-16 rounded-full bg-brand-primary" />

              <p class="text-base leading-7 text-slate-600">
                {{ skillGroup.description }}
              </p>
            </div>

            <ul class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base leading-7 text-slate-600">
              <li
                v-for="skill in skillGroup.skills"
                :key="skill"
                class="flex items-center gap-2"
              >
                <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>{{ skill }}</span>
              </li>
            </ul>
          </UiCard>
        </div>
      </section>

      <!-- Experience -->
      <section class="space-y-8">
        <UiDivider label="Experience" />

        <UiCard class="resume-card space-y-10">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div class="space-y-2">
              <h2>Front-End Developer & Business Systems</h2>

              <p class="text-lg font-semibold text-brand-primary">
                Golden Gate Manor Inc.
              </p>

              <p class="text-sm text-slate-500">
                Pueblo, Colorado
              </p>
            </div>

            <span class="w-fit rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
              2024 – Present
            </span>
          </div>

          <p class="leading-8 text-slate-600">
            Design, develop, and maintain a comprehensive business platform
            supporting multiple healthcare and transportation divisions.
            Lead development of a production business platform supporting 
            healthcare, transportation, assisted living, and retail operations 
            while building internal software, operational workflows, SEO strategy, 
            administrative tools, and digital business solutions.
          </p>

          <div class="border-t border-slate-200" />

          <div class="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 class="mb-5">Responsibilities</h3>

              <ul class="space-y-3 text-slate-800">
                <li>✓ Developed production Nuxt applications</li>
                <li>✓ Created reusable Vue component architecture</li>
                <li>✓ Built internal business software</li>
                <li>✓ Developed REST API integrations</li>
                <li>✓ Managed production infrastructure &amp; deployments</li>
                <li>✓ Optimized performance &amp; accessibility</li>
                <li>✓ Created employment application systems</li>
                <li>✓ Developed consultation request workflows</li>
                <li>✓ Led technical SEO strategy</li>
              </ul>
            </div>

            <div>
              <h3 class="mb-5">Highlights</h3>

              <ul class="space-y-3 text-slate-800">
                <li>50+ production pages developed</li>
                <li>100+ Vue components</li>
                <li>10+ internal business systems</li>
                <li>20+ interactive features</li>
                <li>Multi-division healthcare platform</li>
                <li>Healthcare software workflows</li>
                <li>Administrative business tools</li>
                <li>Content management system</li>
                <li>Production deployment pipeline</li>
                <li>Responsive web applications</li>
              </ul>
            </div>
          </div>
        </UiCard>
      </section>

      <!-- Featured Projects -->
      <section class="space-y-8">
        <UiDivider label="Featured Projects" />

        <div class="grid gap-6 lg:grid-cols-3">
          <UiCard
            v-for="project in projects"
            :key="project.title"
            class="project-card group flex h-full flex-col overflow-hidden"
          >
            <div
              v-if="project.image"
              class="overflow-hidden bg-gray-100"
            >
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div class="flex flex-1 flex-col sm:items-start lg:items-stretch space-y-4 p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
                {{ project.type }}
              </p>

              <h3>{{ project.title }}</h3>

              <p class="flex-1 text-slate-600">
                {{ project.description }}
              </p>

              <UiLink
                variant="secondary"
                :to="project.to"
              >
                View Project →
              </UiLink>
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Education -->
      <section class="space-y-8">
        <UiDivider label="Education" />

        <UiCard class="resume-card space-y-8">
          <div class="grid gap-8 lg:grid-cols-2">
            <div class="space-y-3">
              <h2>Associate of Science</h2>

              <p class="text-lg font-semibold text-brand-primary">
                Pueblo Community College
              </p>

              <p class="text-sm text-slate-500">
                Pueblo, Colorado • May 2018
              </p>
            </div>

            <div class="space-y-3">
              <h2>Self-Directed Technical Development</h2>

              <p class="leading-8 text-slate-600">
                Continued learning through production software, real-world
                business challenges, independent study, and hands-on ownership
                of modern web applications.
              </p>
            </div>
          </div>
        </UiCard>
      </section>

      <!-- Final CTA -->
      <section class="mx-auto max-w-4xl space-y-6 text-center">
        <h2>Let's Build Something Great</h2>

        <p class="mx-auto max-w-3xl leading-8 text-slate-600">
          I'm interested in building thoughtful software, improving business
          operations, and solving real-world problems through technology.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <UiLink
            variant="brand"
            to="/projects"
          >
            View Projects
          </UiLink>

          <UiLink
            variant="secondary"
            href="/resume.pdf"
            new-page
          >
            Download Resume
          </UiLink>

          <UiLink
            variant="secondary"
            to="/contact"
          >
            Contact Me
          </UiLink>
        </div>
      </section>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ResumePage'
})

const professionalHighlights = [
  {
    value: '50+',
    label: 'Pages'
  },
  {
    value: '100+',
    label: 'Components'
  },
  {
    value: '120+',
    label: 'API Endpoints'
  },
  {
    value: '20+',
    label: 'Features'
  },
  {
    value: '10+',
    label: 'Systems'
  }
]

const skillGroups = [
  {
    title: 'Frontend Development',
    description:
      'Modern user interfaces built with component-driven architecture and responsive design.',
    skills: ['Nuxt 3', 'Vue 3', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend & Infrastructure',
    description:
      'Application workflows, deployment support, server environments, and development tooling.',
    skills: ['Node.js', 'Git', 'GitHub', 'REST APIs', 'Plesk', 'Linux']
  },
  {
    title: 'Business Applications',
    description:
      'Practical software focused on healthcare operations, internal business workflows, accessibility, SEO, and user experience.',
    skills: ['SEO', 'Accessibility', 'Responsive Design', 'UI / UX', 'Business Systems', 'Healthcare Technology']
  }
]

const projects = [
  {
    title: 'Golden Gate Manor Platform',
    type: 'Business Platform',
    image: '/images/pages/projects/golden-gate-manor/hero.png',
    description:
      'Multi-division business platform supporting healthcare, transportation, assisted living, and retail operations.',
    to: '/projects/golden-gate-manor'
  },
  {
    title: 'Admin Dashboard Suite',
    type: 'Admin Platform',
    image: '/images/pages/projects/internal-tools/admin-dashboard.png',
    description:
      'Administrative dashboards, correspondence management, consultation systems, hiring workflows, and operational tools.',
    to: '/projects/internal-tools'
  },
  {
    title: 'Secure Referral Portal',
    type: 'Healthcare Platform',
    image: '/images/pages/projects/referral-portal/hero.png',
    description:
      'Healthcare referral platform focused on encrypted provider submissions and streamlined communication.',
    to: '/projects/referral-portal'
  }
]
</script>

<style scoped>
.resume-card,
.project-card {
  background: #ffffff;
  color: #334155;
  box-shadow: 0 20px 40px rgb(15 23 42 / 0.12);
  border: 1px solid rgb(226 232 240);
}

.resume-card :deep(h2),
.resume-card :deep(h3),
.project-card :deep(h3) {
  color: #1e293b;
}
</style>