<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

function toTop() {
  window.scrollTo({ top: 0 })
}

const { y } = useWindowScroll()
const visible = computed(() => y.value > 100)
</script>
<template>
  <div
    v-if="visible"
    class="fixed right-10 bottom-10"
    @click="toTop"
  >
    <bi-chevron-double-up />
  </div>
</template>
