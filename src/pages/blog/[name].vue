<script setup lang="ts">
import { defineProps, ref } from 'vue'
import markdown from 'markdown-it'
import { useRouter } from 'vue-router'

const md = markdown()
const router = useRouter()
// md.use(meta)

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
const current = ref<any>({
  date: '',
})
const prev = ref<any>({})
const next = ref<any>({})
const blogs = ref([])

function goList() {
  router.push('/blogs')
}

fetch(`/blog/${props.name}.md`).then(res => res.text())
  .then(mdText => mdText.replace(/^---[\w\W]+?---/, ''))
  .then((res) => {
    content.value = md.render(res)
    metaObj.value = md.meta

    return fetch('/meta/config.json').then(res => res.json())
  })
  .then(({ blogs }) => {
    const index = blogs.findIndex((bg: any) => bg.file === props.name)
    current.value = blogs[index]
    prev.value = blogs[(index + 1) % blogs.length]
    next.value = blogs[(index - 1 + blogs.length) % blogs.length]
  })

fetch('/meta/config.json').then(res => res.json())
  .then((config) => {
    blogs.value = config.blogs
  })

</script>

<template>
  <div class="flex justify-between">
    <div class="md:w-1/4 sm:hidden md:block">
      <ArticleList :list="blogs.slice(0, 7)" />
      <More @click="goList" />
    </div>
    <div
      class="md:w-4/9 text-sm font-extralight prose prose-sm m-auto text-left font-normal"
      style="font-family: Heiti;"
    >
      <div v-html="content"></div>
    </div>
    <div class="md:w-1/4" style="font-family: Heiti;">
      <img class="w-full" :src="current.cover" alt="">
      <h2 class="py-2 text-center font-bold">
        {{ current.title }} <small>{{ current.date.slice(0, 10) }}</small>
      </h2>
      <div class="text-sm text-center">
        {{ current.desc }}
      </div>
      <div></div>
    </div>

    <ToTop />
  </div>
</template>
