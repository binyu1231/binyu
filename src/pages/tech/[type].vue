<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import markdown from 'markdown-it'

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const md = markdown()
    const articles = ref<any[]>([])
    const route = useRoute()
    const content = ref<any>()

    watch(() => route.query.file, (v) => {
      fetch(`/tech/${props.type}/${v}.md`).then(res => res.text())
        .then(mdText => mdText.replace(/^---[\w\W]+?---/, ''))
        .then((res) => {
          content.value = md.render(res)
          // metaObj.value = md.meta

          return fetch('/meta/config.json').then(res => res.json())
        })
    })

    watch(() => props.type, () => {
      fetch('/meta/config.json').then(res => res.json())
        .then(({ tech }) => {
          articles.value = tech[props.type]
        })
    }, { immediate: true })

    return {
      articles,
      content,
    }
  },
})
</script>
<template>
  <div>
    <div class="flex">
      <div
        class="md:w-2/3 text-sm font-extralight prose prose-sm m-auto text-left font-normal"
        style="font-family: Heiti;"
      >
        <div v-html="content"></div>
      </div>
      <div class="md:w-1/3">
        <ul class="text-xs">
          <li v-for="at in articles" :key="at.file" class="py-1 px-2">
            <router-link :to="'/tech/' + $props.type + '?file=' + at.file">
              <div class="text-nowrap">
                {{ at.title }}
              </div>
              <div class="text-right">
                {{ (at.date || '').slice(0, 10) }}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: tech
</route>
