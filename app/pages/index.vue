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
            Front-End Web Developer
          </p>

          <h1>
            Building clean, practical websites that help real businesses work better.
          </h1>

          <p>
            I'm Zachary Thallas, a self-taught web developer focused on building modern,
            content-driven websites with Vue, Nuxt, TypeScript, and Tailwind CSS.
          </p>

          <p>
            My work blends design, development, SEO, and real business operations. I care
            about making websites that look good, load fast, stay organized, and actually
            solve problems.
          </p>

          <div class="flex flex-wrap gap-3">
            <UiLink to="/projects">
              View Projects
            </UiLink>
            <UiLink to="/about-me" variant="secondary">
              About Me
            </UiLink>
          </div>
        </UiCard>
      </LayoutContainer>
    </section>

    <!-- Intro / Journey -->
    <LayoutParallax background="/images/pages/index/rocky-mountains.jpg">
      <LayoutContainer>
        <UiCard class="space-y-5">
          <h2>My Journey</h2>

          <p>
            I grew up between Colorado and South Dakota, with a long-running curiosity for
            computers, design, and how things work. That curiosity eventually turned into
            web development, where I found a way to combine problem-solving, creativity,
            and practical business needs.
          </p>

          <p>
            I do not approach websites as just pages on a screen. I see them as systems:
            places where content, structure, design, performance, and user experience all
            need to work together. That mindset has shaped the way I build projects today.
          </p>

          <p>
            A lot of my experience comes from building and improving real business tools,
            service pages, SEO content, admin workflows, and customer-facing websites.
            I enjoy taking messy information and turning it into something clear,
            useful, and easy to navigate.
          </p>

          <h3>What I Focus On</h3>

          <div class="grid gap-4 md:grid-cols-3">
            <UiCard class="space-y-2">
              <h4>Front-End Development</h4>
              <p>
                Vue, Nuxt, TypeScript, Tailwind CSS, reusable components, and responsive layouts.
              </p>
            </UiCard>

            <UiCard class="space-y-2">
              <h4>Content & SEO</h4>
              <p>
                Clear page structure, service content, local SEO, metadata, and search-focused writing.
              </p>
            </UiCard>

            <UiCard class="space-y-2">
              <h4>Business Systems</h4>
              <p>
                Practical tools, admin pages, forms, workflows, documentation, and process improvements.
              </p>
            </UiCard>
          </div>

          <h3>Beyond Web Development</h3>

          <p>
            Outside of development, I enjoy creative hobbies, movies, books, crochet,
            design, and learning new skills. Those interests keep me curious and help me
            bring a thoughtful, detail-oriented approach to the things I build.
          </p>

          <div class="flex flex-wrap gap-3">
            <UiLink to="/about-me" variant="secondary">
              More About Me
            </UiLink>
            <UiLink to="/projects">
              Explore My Work
            </UiLink>
          </div>
        </UiCard>
      </LayoutContainer>
    </LayoutParallax>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'HomePage'
})
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
</style>