<script setup lang="ts">
import { ref } from 'vue'

const blogs = ref([])

fetch('/meta/config.json').then(res => res.json())
  .then((config) => {
    blogs.value = config.blogs
  })
</script>
<template>
  <main class="container pt-10">
    <Header title="Binyu.me" class="mb-8" />

    <div class="flex">
      <div class="md:w-1/4">
        <ArticleList :list="blogs.slice(0, 7)" />
      </div>
      <div class="md:w-1/2">
        <router-view />
      </div>
    </div>
    <ToTop />
  </main>
</template>
