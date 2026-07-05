<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-black text-white sm:min-h-screen">
      <NuxtImg
        src="/images/pages/index/face-thallas.png"
        alt="Zachary Thallas"
        class="hidden sm:block sm:absolute sm:bottom-0 sm:right-0 sm:h-full sm:object-cover sm:opacity-25"
      />

      <div class="image-box-shadow relative sm:hidden">
        <NuxtImg
          src="/images/pages/index/face-thallas-full.jpg"
          alt="Zachary Thallas"
          class="w-full"
        />
      </div>

      <LayoutContainer class="relative z-10 flex min-h-[70vh] items-end py-10 sm:min-h-screen sm:items-center">
        <UiCard class="max-w-2xl space-y-5">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            About Me
          </p>

          <h1>
            Building software through curiosity, problem solving, and real business experience.
          </h1>

          <p>
            I'm Zachary Thallas, a self-taught developer focused on building modern web
            applications, internal business systems, and healthcare technology that solves
            practical problems for real people.
          </p>

          <p>
            My path into development came from working directly inside business operations,
            seeing inefficient workflows firsthand, and learning how to turn those problems
            into software that makes work easier.
          </p>

          <div class="flex flex-wrap gap-3">
            <UiLink to="/projects">
              View Projects
            </UiLink>

            <UiLink to="/resume" variant="secondary">
              View Resume
            </UiLink>
          </div>
        </UiCard>
      </LayoutContainer>
    </section>

    <!-- Journey -->
    <LayoutParallax background="/images/pages/index/rocky-mountains.jpg">
      <LayoutContainer class="space-y-8 py-16">
        <UiDivider label="How I Got Here" />

        <UiCard class="about-card space-y-8">
          <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div class="space-y-5">
              <h2>
                From Business Operations to Software Development
              </h2>

              <p>
                I did not enter software development through a traditional path. I started
                by working across real business environments where transportation, medical
                supplies, assisted living, retail, marketing, administration, and customer
                service all depended on systems that needed to be clearer, faster, and
                easier to manage.
              </p>

              <p>
                The more I worked inside those processes, the more I noticed repeated
                problems: information spread across too many places, manual tasks that
                slowed people down, forms that were difficult to manage, and websites that
                did not fully support the business behind them.
              </p>

              <p>
                That curiosity turned into development. What began with website updates
                and content improvements eventually grew into building production Nuxt
                applications, internal admin tools, secure intake workflows, API-backed
                systems, and a broader digital platform supporting multiple divisions.
              </p>
            </div>

            <div class="rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-8">
              <h3>
                What Drives Me
              </h3>

              <ul class="mt-6 space-y-4">
                <li
                  v-for="item in drivers"
                  :key="item"
                  class="flex gap-3 text-slate-700"
                >
                  <span class="text-brand-primary">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </UiCard>
      </LayoutContainer>
    </LayoutParallax>

    <!-- Philosophy -->
    <section class="bg-white">
      <LayoutContainer class="space-y-8 py-20 mx-auto">
        <UiDivider label="Development Philosophy" />

        <UiCard class="about-card space-y-10 text-center">
          <blockquote class="mx-auto max-w-5xl text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
            “Good software should not just work. It should make someone’s job easier.”
          </blockquote>

          <p class="mx-auto max-w-4xl text-lg leading-8 text-slate-600">
            I believe the best software is built around the people who use it.
            Whether it is an internal dashboard, healthcare workflow, public website,
            or administrative tool, every decision should reduce friction, improve
            clarity, and create long-term value.
          </p>

          <div class="grid gap-6 md:grid-cols-3">
            <UiCard
              v-for="principle in principles"
              :key="principle.title"
              class="about-card-small space-y-4"
            >
              <div class="h-1 w-16 rounded-full bg-brand-primary" />

              <h3>
                {{ principle.title }}
              </h3>

              <p>
                {{ principle.description }}
              </p>
            </UiCard>
          </div>
        </UiCard>
      </LayoutContainer>
    </section>

    <!-- What I Build -->
    <LayoutParallax background="/images/pages/index/rocky-mountains.jpg">
      <LayoutContainer class="py-20">
          <UiDivider label="What I Build" class="mb-8" />

          <UiCard class="space-y-12">

              <div class="mx-auto max-w-4xl space-y-5 text-center">
                  <h2>
                      Building software that supports real businesses.
                  </h2>

                  <p class="text-lg leading-8">
                      I enjoy creating complete software ecosystems that blend modern web
                      development, business operations, healthcare technology, and user
                      experience into practical solutions.
                  </p>
              </div>

              <div class="space-y-12">

                  <!-- Business -->

                  <div class="border-l-4 border-brand-primary pl-8">
                      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
                          Business Systems
                      </p>

                      <h3 class="mb-4">
                          Internal software that improves day-to-day operations.
                      </h3>

                      <p class="max-w-4xl leading-8">
                          I enjoy designing administrative dashboards, hiring systems,
                          consultation workflows, documentation platforms, reporting
                          tools, and operational software that help organizations work
                          more efficiently.
                      </p>

                      <ul class="mt-6 grid gap-3 md:grid-cols-2">
                          <li>✓ Administrative dashboards</li>
                          <li>✓ Internal business tools</li>
                          <li>✓ Consultation systems</li>
                          <li>✓ Hiring workflows</li>
                          <li>✓ Documentation</li>
                          <li>✓ Process automation</li>
                      </ul>
                  </div>

                  <!-- Healthcare -->

                  <div class="border-l-4 border-brand-primary pl-8">
                      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
                          Healthcare Technology
                      </p>

                      <h3 class="mb-4">
                          Practical software built around healthcare workflows.
                      </h3>

                      <p class="max-w-4xl leading-8">
                          Much of my work focuses on transportation, durable medical
                          equipment, provider communication, secure intake workflows,
                          accessibility, and simplifying complex operational processes.
                      </p>

                      <ul class="mt-6 grid gap-3 md:grid-cols-2">
                          <li>✓ Secure referral systems</li>
                          <li>✓ Provider communication</li>
                          <li>✓ DME operations</li>
                          <li>✓ Accessibility</li>
                          <li>✓ Patient intake</li>
                          <li>✓ Operational workflows</li>
                      </ul>
                  </div>

                  <!-- Web -->

                  <div class="border-l-4 border-brand-primary pl-8">
                      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
                          Modern Web Applications
                      </p>

                      <h3 class="mb-4">
                          Clean, maintainable applications built for long-term growth.
                      </h3>

                      <p class="max-w-4xl leading-8">
                          I build component-driven applications using Vue, Nuxt,
                          TypeScript, Tailwind CSS, and REST APIs while focusing on
                          performance, accessibility, SEO, and maintainability.
                      </p>

                      <ul class="mt-6 grid gap-3 md:grid-cols-2">
                          <li>✓ Nuxt 3</li>
                          <li>✓ Vue</li>
                          <li>✓ TypeScript</li>
                          <li>✓ REST APIs</li>
                          <li>✓ SEO</li>
                          <li>✓ Responsive design</li>
                      </ul>
                  </div>

              </div>

          </UiCard>
      </LayoutContainer>
    </LayoutParallax>

    <!-- Beyond Development -->
    <section class="bg-white">
      <LayoutContainer class="space-y-8 py-20 mx-auto">
        <UiDivider label="Beyond Development" />

        <UiCard class="about-card">
          <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div class="space-y-5">
              <h2>
                Curiosity outside of code shapes how I build.
              </h2>

              <p>
                Outside of development, I enjoy creative hobbies, landscaping and outdoor
                design, crochet, movies, books, learning new tools, and finding better
                ways to organize the world around me. Those interests help me stay
                curious and bring a thoughtful approach to problem solving.
              </p>

              <p>
                I have always been drawn to understanding how things work. That curiosity
                applies to software, business processes, design systems, infrastructure,
                and the small details that make an experience feel better.
              </p>

              <p>
                The common thread is simple: I like making things clearer, more useful,
                and more intentional than they were before.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="interest in interests"
                :key="interest.title"
                class="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm"
              >
                <p class="text-3xl">
                  {{ interest.icon }}
                </p>

                <p class="mt-3 font-semibold text-slate-800">
                  {{ interest.title }}
                </p>
              </div>
            </div>
          </div>
        </UiCard>
      </LayoutContainer>
    </section>

    <!-- CTA -->
    <section class="bg-white">
      <LayoutContainer class="py-20 mx-auto">
        <div class="mx-auto max-w-4xl space-y-6 text-center">
          <h2>
            Let's Build Something Great
          </h2>

          <p class="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Whether you're looking for a developer, discussing a project, or simply
            want to connect, I'd love to hear from you.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <UiLink to="/projects" variant="brand">
              View Projects
            </UiLink>

            <UiLink to="/resume" variant="secondary">
              View Resume
            </UiLink>

            <UiLink to="/contact" variant="secondary">
              Contact Me
            </UiLink>
          </div>
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutMePage'
})

const drivers = [
  'Solving real operational problems',
  'Building tools people actually use',
  'Making complicated workflows easier to understand',
  'Creating clean and maintainable systems',
  'Improving performance, accessibility, and usability',
  'Continuously learning through real production work'
]

const principles = [
  {
    title: 'User First',
    description:
      'I try to build around the people who will actually use the software, not just the structure behind it.'
  },
  {
    title: 'Maintainable Systems',
    description:
      'I value reusable components, clear organization, and decisions that make a project easier to grow over time.'
  },
  {
    title: 'Practical Impact',
    description:
      'The best projects solve real problems, reduce friction, and support the business or people behind them.'
  }
]

const interests = [
  {
    icon: '🌱',
    title: 'Landscaping'
  },
  {
    icon: '💻',
    title: 'Side Projects'
  },
  {
    icon: '🧶',
    title: 'Crochet'
  },
  {
    icon: '⚙️',
    title: 'Systems Thinking'
  }
]
</script>

<style scoped>
.image-box-shadow::before {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 0.4rem 0.4rem #000;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
}

.about-card,
.about-card-small {
  background: #ffffff;
  color: #334155;
  box-shadow: 0 20px 40px rgb(15 23 42 / 0.12);
  border: 1px solid rgb(226 232 240);
}

.about-card :deep(h2),
.about-card :deep(h3),
.about-card-small :deep(h3) {
  color: #1e293b;
}

.about-card :deep(p),
.about-card-small :deep(p) {
  color: #475569;
  line-height: 1.75;
}
</style>