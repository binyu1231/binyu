<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import source from '../meta/shortcut.json'

const route = useRoute()
const dlb = (n: number) => Number(n) < 10 ? `0${n}` : `${n}`
const currType = ref(route.hash.replace('#', '') || source[0].name)

const filterSource = computed(() => {
  return source.filter((s: any) => s.name === currType.value)
})

</script>
<template>
  <PageLayout
    cover="https://xinghe-blog-bucket.oss-cn-beijing.aliyuncs.com/img/blog-coloration-cover.jpg"
  >
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-20">
        <!-- Section header -->
        <ul class="flex">
          <li
            v-for="tab in source"
            :key="tab.name"
          >
            <a :href="'#' + tab.name" class="tab" :class="{ 'tab-active': currType === tab.name }" @click="currType = tab.name">
              {{ tab.name }}
            </a>
          </li>
        </ul>

        <div v-for="d in filterSource" :key="d.name">
          <ul>
            <li v-for="subject in d.children" :key="subject.name" class="mb-10">
              <h3 :id="subject.name" class="text-2xl font-extrabold px-2 mb-6 bg-purple-200 text-purple-700 dark:bg-purple-800 dark:text-purple-300 py-2">
                {{ subject.name }}
              </h3>

              <div v-for="mod in subject.children" :key="mod.name" class="px-2">
                <h3 class="font-semibold text-lg pb-3 border-b border-gary-300 dark:border-gray-700 mb-4">
                  {{ mod.name }}
                </h3>
                <ul class="columns-2 pb-6 md:columns-3">
                  <li v-for="(article, i) in mod.children" :key="article.name">
                    <span class="font-mono mr-2 text-gray-600 dark:text-gray-400">{{ dlb(i + 1) }}.</span>
                    <a :href="article.value" class="text-purple-700 dark:text-purple-400 hover:underline">{{ article.name }}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
<style>
.tab {
  @apply block pt-4 pb-2 px-2 uppercase mb-6;
}
.tab:hover,
.tab-active {
  @apply border-b-2 border-purple-500;
}
</style>
