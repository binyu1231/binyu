<script setup lang="ts">
const props = defineProps({
  cover: {
    default: ''
  }
})
</script>
<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow relative">

      <HeaderImage v-if="props.cover" :url="props.cover" />
      <!-- Page sections -->
      <slot></slot>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>
