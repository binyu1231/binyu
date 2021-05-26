<script setup lang="ts">
import { defineProps } from 'vue'
import { isDark, toggleDark } from '~/logic'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border-b border-line-color h-18 flex justify-between items-end">
    <div class="relative h-full">
      <div class="absolute t-0 l-0 w-40 h-14 block-bg-color">
        <a class="icon-btn p-1" @click="toggleDark">
          <carbon-moon v-if="isDark" />
          <carbon-sun v-else />
        </a>
      </div>
      <div class="absolute left-6 top-3 flex items-end">
        <a href="/" class="text-6xl cursor-pointer">
          {{ props.title }}
        </a>
      </div>
    </div>
    <div class="pb-4 flex">
      <div class="w-24 h-8 block-bg-color ml-4"></div>
      <div class="w-24 h-8 block-bg-color ml-4"></div>
      <div class="w-24 h-8 block-bg-color ml-4"></div>
    </div>
  </div>
</template>
