<script setup lang="ts">

</script>
<template>
  <main class="container pt-10">
    <Header title="Binyu.me" class="mb-8" />

    <div class="clearfix md:flex">
      <div class="md:w-3/4">
        <router-view />
      </div>
      <div class="md:w-1/4">
        <TipList />
      </div>
    </div>

    <ToTop />
  </main>
</template>
