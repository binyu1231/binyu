<script setup lang="ts">
import { ref } from 'vue'

const blogs = ref([])

fetch('/meta/config.json').then(res => res.json())
  .then((config) => {
    blogs.value = config.blogs.slice(0, 7)
  })
</script>
<template>
  <main class="container pt-10 px-4">
    <Header title="Binyu.me" class="mb-8" />

    <div class="clearfix md:flex">
      <div class="md:w-1/2">
        <ArticleList :list="blogs" />
        <div class="flex justify-end pr-2">
          <router-link to="/blogs">
            <More />
          </router-link>
        </div>
      </div>
      <div class="md:w-1/4">
        <PictureList />
      </div>
      <div class="md:w-1/4">
        <TipList />
      </div>
    </div>
    <!-- <router-view /> -->
  </main>
</template>
