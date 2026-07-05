<template>
  <div>
    <section class="bg-white">
      <LayoutContainer class="mx-auto space-y-10 py-20">
        <section class="mx-auto max-w-4xl space-y-5 text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
            {{ eyebrow }}
          </p>

          <h1>
            {{ title }}
          </h1>

          <p
            v-if="updated"
            class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500"
          >
            Last Updated: {{ updated }}
          </p>

          <p
            v-if="description"
            class="mx-auto max-w-3xl text-lg leading-8 text-slate-600"
          >
            {{ description }}
          </p>
        </section>

        <UiCard class="legal-card">
          <article class="legal-content">
            <slot />
          </article>
        </UiCard>

        <section class="mx-auto max-w-4xl space-y-5 text-center">
          <h2>
            Questions?
          </h2>

          <p class="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            If you have questions about this page or how this website handles
            information, feel free to reach out.
          </p>

          <UiLink
            to="/contact"
            variant="brand"
          >
            Contact Me
          </UiLink>
        </section>
      </LayoutContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  updated?: string
  description?: string
}>(), {
  eyebrow: 'Legal',
  updated: undefined,
  description: undefined
})
</script>

<style scoped>
.legal-card {
  background: #ffffff;
  color: #334155;
  box-shadow: 0 20px 40px rgb(15 23 42 / 0.12);
  border: 1px solid rgb(226 232 240);
}

.legal-content {
  max-width: 72ch;
  margin-inline: auto;
}

.legal-content :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #1e293b;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
}

.legal-content :deep(h2:first-child) {
  margin-top: 0;
}

.legal-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 700;
}

.legal-content :deep(p) {
  margin-bottom: 1rem;
  color: #475569;
  line-height: 1.8;
}

.legal-content :deep(ul) {
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
  color: #475569;
  line-height: 1.8;
  list-style: disc;
}

.legal-content :deep(li) {
  margin-bottom: 0.5rem;
}

.legal-content :deep(a) {
  color: #d4af37;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>