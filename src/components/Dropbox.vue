<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },

})
</script>
<template>
  <div v-bind="$attrs">
    <div class="relative">
      <div class="absolute w-2/3">
        <div class="w-1/5 border-b border-line-color mb-1"></div>
        <div class="w-1/3 border-b border-line-color mb-1"></div>
        <div class="w-1/2 border-b border-line-color mb-1"></div>
        <div class="w-2/3 border-b border-line-color mb-1"></div>
      </div>
      <div class="relative pr-4">
        <div class="absolute right-0 w-20 h-4 block-bg-color"></div>
        <div class="relative text-right">
          {{ props.title }}
        </div>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
