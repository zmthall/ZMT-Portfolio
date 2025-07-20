<template>
  <section 
    class="parallax relative min-h-screen px-8 lg:px-16 py-40" 
    :style="parallaxStyle"
  > 
    <!-- Content -->
    <div class="relative z-10 min-h-screen flex items-center justify-center">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  background: string
}

const props = defineProps<Props>()

const parallaxStyle = computed(() => ({
  '--bg-url': `url("${props.background}")`
}))
</script>

<style scoped>
section.parallax::before {
  content: "";
  background: var(--bg-url) no-repeat center/cover;
  background-attachment: fixed;
  @apply fixed inset-0 h-screen w-screen -z-10;
}

/* Mobile fixes */
@media (max-width: 768px) {
  section.parallax::before {
    background-attachment: scroll;
  }
}
</style>