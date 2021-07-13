<script lang="ts" setup>
import { watch } from '@vue/runtime-core'
import { ref } from 'vue-demi'
import { useRoute } from 'vue-router'
import posts from '~/meta/posts.json'

const current = ref({
      title: '',
      cover: '',
      date: '',
      desc: ''
    })
const next = ref({
      title: '',
      cover: '',
      date: '',
      desc: ''
    })
const prev = ref({
      title: '',
      cover: '',
      date: '',
      desc: ''
    })

const route = useRoute()

watch(() => route.path, () => {
  const { path } = route
  const name = path.replace(/\/.*\//, '')
  const currentIdx = posts.findIndex(p => p.file === name)

  prev.value = currentIdx > 0 ? posts[currentIdx - 1] : null
  next.value = currentIdx < posts.length - 1 ? posts[currentIdx + 1] : null
  current.value = posts[currentIdx]
  window.scrollTo({ top: 0 })
}, { immediate: true })

</script>
<template>
  <PageLayout>
    <!-- Page sections -->
    <BlogSingle :post="current">
      <router-view />
    </BlogSingle>
    <RelatedPosts :next="next" :prev="prev" />
  </PageLayout>
</template>