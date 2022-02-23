<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue-demi'
import { useRoute } from 'vue-router'
import posts from '~/meta/posts.json'

type PostContent = {
  title: string
  cover: string
  date: string
  desc: string
}

const current = ref<PostContent>({
  title: '',
  cover: '',
  date: '',
  desc: '',
})

const next = ref<PostContent | null>(null)
const prev = ref<PostContent | null>(null)

const route = useRoute()

watch(() => route.path, () => {
  const { path } = route
  const name = path.replace(/\/.*\//, '')
  const currentIdx = posts.findIndex(p => p.file === name)

  if (currentIdx < 0) return

  prev.value = currentIdx > 0 ? posts[currentIdx - 1] : null
  next.value = currentIdx < posts.length - 1 ? posts[currentIdx + 1] : null
  current.value = posts[currentIdx]
  globalThis.scrollTo({ top: 0 })
}, { immediate: true })

</script>
<template>
  <PageLayout :cover="current.cover">
    <!-- Page sections -->
    <BlogSingle :post="current">
      <ArticleHelper>
        <router-view />
      </ArticleHelper>
    </BlogSingle>
    <div v-if="next || prev">
      <RelatedPosts :next="next!" :prev="prev!" />
    </div>

    <Comments />
  </PageLayout>
</template>
