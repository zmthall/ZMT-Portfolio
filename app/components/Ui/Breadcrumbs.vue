<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-2 text-sm text-slate-500">
      <li
        v-for="(item, index) in items"
        :key="item.label"
        class="flex items-center gap-2"
      >
        <NuxtLink
          v-if="item.to && index !== items.length - 1"
          :to="item.to"
          class="font-medium transition-colors hover:text-brand-primary"
        >
          {{ item.label }}
        </NuxtLink>

        <span
          v-else
          class="font-medium text-slate-800"
        >
          {{ item.label }}
        </span>

        <span
          v-if="index !== items.length - 1"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
type BreadcrumbItem = {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>
