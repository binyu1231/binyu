<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 600,
    easing: 'ease-out-sine',
  })
})
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Binyu',
  meta: [
    { name: 'description', content: 'Binyu\'s Blog' },
  ],
})
</script>

<template>
  22
  <router-view />
</template>
