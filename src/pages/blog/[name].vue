<script setup lang="ts">
import { defineProps, ref } from 'vue'
import markdown from 'markdown-it'
import meta from 'markdown-it-meta'

const md = markdown()
md.use(meta)

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  x: {
    type: Object,
  },
})

const content = ref('')
const metaObj = ref<any>({})
const prev = ref<any>({})
const next = ref<any>({})

fetch(`/blog/${props.name}.md`).then(res => res.text())
  .then((res) => {
    content.value = md.render(res)
    metaObj.value = md.meta

    return fetch('/meta/config.json').then(res => res.json())
  })
  .then(({ blogs }) => {
    const index = blogs.findIndex((bg: any) => bg.file === props.name)
    prev.value = blogs[(index + 1) % blogs.length]
    next.value = blogs[(index - 1 + blogs.length) % blogs.length]
  })

</script>

<template>
  <div class="flex">
    <div class="md:w-1/2">
      <div>props.x: {{ props.x }}</div>
      <div>{{ metaObj.title }}</div>
      <img :src="metaObj.cover" alt="">
    </div>
    <div class="md:w-1/2">
      <div v-html="content"></div>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: blog
</route>
