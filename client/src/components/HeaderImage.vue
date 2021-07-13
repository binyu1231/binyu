<script lang="ts" setup>
const props = defineProps({
  url: {
    default: ''
  }
})
</script>
<template>
<div class="absolute inset-0 h-128 pt-16 box-content">
  <img 
    class="absolute inset-0 w-full h-full object-cover opacity-25" 
    :src="props.url" 
    width="1440" 
    height="577" 
    alt="About" 
  />
  <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
</div>
</template>