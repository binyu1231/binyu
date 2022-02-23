<script setup lang="ts">
import { ref, onMounted } from 'vue-demi'

const toc = ref<HTMLElement | null>(null)
const blockAdContent = ref('')

onMounted(() => {
  const tocDom = globalThis.document.querySelector('.table-of-contents')
  if (!toc.value || !tocDom) return
  toc.value.appendChild(tocDom)

  const adDom = document.getElementById('blog-ad-aside')
  if (adDom)
    blockAdContent.value = adDom.innerHTML
})
</script>
<template>
  <div class="mk md:flex md:justify-between">
    <div class="relative my-12 md:my-0 md:w-64 md:mr-12 lg:mr-20 md:flex-shrink-0">
      <div ref="toc">
      </div>

      <div class="min-h-20 mt-20 opacity-80" v-html="blockAdContent">
      </div>
    </div>
    <div class="max-w-3xl mx-auto" data-aos="fade-up">
      <slot></slot>
    </div>
  </div>
</template>
