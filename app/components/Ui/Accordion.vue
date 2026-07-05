<template>
  <div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div
      v-for="item in items"
      :key="item.value"
    >
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-900"
        :aria-expanded="openValue === item.value"
        @click="toggle(item.value)"
      >
        <span>{{ item.title }}</span>
        <span class="text-brand-primary">
          {{ openValue === item.value ? '−' : '+' }}
        </span>
      </button>

      <div
        v-if="openValue === item.value"
        class="px-6 pb-5 leading-7 text-slate-600"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type AccordionItem = {
  title: string
  value: string
  content: string
}

const props = defineProps<{
  items: AccordionItem[]
  defaultValue?: string
}>()

const openValue = ref(props.defaultValue ?? '')

const toggle = (value: string) => {
  openValue.value = openValue.value === value ? '' : value
}
</script>
