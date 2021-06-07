<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'
// @ts-ignore
import markdown from 'markdown-it'

const md = markdown()
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

watch(() => props.name, () => {
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
}, { immediate: true })
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between">
    <div class="lg:w-1/4 md:w-1/3 w-full pb-20 order-2 md:order-1 opacity-50 hover:opacity-100 transition duration-500 ease-in-out">
      <ArticleList :list="blogs.slice(0, 7)" :desc-visiable="false" />
      <router-link to="/blogs">
        <More />
      </router-link>
    </div>
    <div class="lg:w-3/4 md:w-2/3 md:pl-2 order-1 md:order-2">
      <div class="flex flex-col lg:flex-row lg:px-0">
        <div
          class="lg:w-2/3 lg:pr-2 w-full order-2 lg:order-1 text-sm font-extralight prose prose-sm m-auto text-left font-normal"
          style="font-family: Heiti;"
        >
          <div v-html="content"></div>
          <div class="border-t border-gray-400 my-10 md:opacity-0"></div>
          <div></div>
        </div>
        <div class="lg:w-1/3 w-full order-1 lg:order-2" style="font-family: Heiti;">
          <img class="w-full" :src="current.cover" />
          <h2 class="py-2 text-center font-bold">
            {{ current.title }}
            <small>{{ current.date }}</small>
          </h2>
          <div class="text-sm text-center">
            {{ current.desc }}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
