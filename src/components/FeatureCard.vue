<script lang="ts" setup>
const props = defineProps({
  title: {
    default: ''
  },
  desc: {
    default: ''
  },
  icon: {
    default: null
  }
})
</script>
<template>
  <div v-bind="$attrs" class="flex flex-col items-center text-center p-5 text-white group shadow-2xl" href="#0" data-aos="fade-up" data-aos-anchor="[data-aos-id-rellinks]">
    <slot></slot>
    <div class="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">{{ props.title }}</div>
    <div class="flex-grow opacity-80 mb-3">{{ props.desc }}</div>
    <svg class="w-4 h-4 mb-1 transform group-hover:rotate-45 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path class="fill-current" d="M14 1H6v2h5.586L1.293 13.293l1.414 1.414L13 4.414V10h2V2a1 1 0 00-1-1z" />
    </svg>
  </div>
  
</template>