<template>
  <div
    ref="dropdownRef"
    class="relative inline-block text-left"
  >
    <button
      type="button"
      class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <slot name="trigger">
        Options
      </slot>
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute right-0 z-40 mt-2 min-w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-xl"
      >
        <slot :close="close" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const close = () => {
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (!dropdownRef.value?.contains(event.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.25rem);
}
</style>
