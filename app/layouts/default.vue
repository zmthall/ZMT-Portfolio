<template>
  <div>
    <LayoutHeaderTop />
    <LayoutHeaderMainNav class="max-md:hidden"/>
    <LayoutHeaderMobileNav class="md:hidden"/>
    <slot />
    <LayoutFooter /> 

    <UiToast
      :toasts="toastStore.toasts"
      @remove="toastStore.removeToast"
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "DefaultPages"
})

const toastStore = useToastStore()
</script>

<style>

</style>