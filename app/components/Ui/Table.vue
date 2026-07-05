<template>
  <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div
      v-if="$slots.header"
      class="border-b border-slate-200 p-5"
    >
      <slot name="header" />
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200">
        <slot />
      </table>
    </div>

    <div
      v-if="$slots.footer"
      class="border-t border-slate-200 p-5"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
