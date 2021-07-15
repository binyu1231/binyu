<script setup lang="ts">
import { useHead } from '@vueuse/head'
import AOS from 'aos'
import { onMounted } from 'vue-demi'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Binyu\'s Blog',
  meta: [
    { name: 'description', content: 'Record life, some web technologies' },
  ],
})

onMounted(() => {
  AOS.init({
    once: true,
    duration: 600,
    easing: 'ease-out-sine',
  })
})
</script>

<template>
  <router-view />
</template>
