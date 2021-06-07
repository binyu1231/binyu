<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const blogs = ref<any[]>()

fetch('/meta/config.json').then(res => res.json())
  .then((config) => {
    blogs.value = config.blogs
  })

</script>
<template>
  <ul class="md:w-1/2">
    <li v-for="(bg, i) in blogs" :key="i" class="flex justify-between group" @click="router.push('/blog/' + bg.file)">
      <span class="group-hover:underline">{{ bg.title }}</span>
      <span>{{ bg.date }}</span>
    </li>
  </ul>
</template>
