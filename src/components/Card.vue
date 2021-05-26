<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  cover: {
    type: String,
    required: true,
    default: 'white',
  },
  href: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <a :href="props.href" class="relative cursor-pointer" v-bind="$attrs">
    <div
      class="absolute w-full h-full bg-center bg-cover"
      style="left: 2px; top: -2px"
      :style="{
        backgroundImage: props.cover.startsWith('http')
          ? `url(${props.cover})`
          : `linear-gradient(to bottom, ${props.cover}, ${props.cover})`,
      }"
    ></div>
    <div
      class="absolute w-full h-full text-white"
      style="background: rgba(0, 0, 0, 0.1); left: 2px; top: -2px; text-shadow: 0 0 2px #000, 0 0 2px #000 "
    >
      <slot></slot>
    </div>

    <div
      class="absolute inset-0"
      style="background: rgba(0, 0, 0, 0.1)"
    ></div>
  </a>
</template>
