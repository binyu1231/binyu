<script lang="ts" setup>
import { onMounted } from '@vue/runtime-core'
import { useEventListener } from '@vueuse/core'
import { ref } from 'vue-demi'

const props = defineProps({
  ratio: {
    default: 1
  }
})

const blockContainer = ref<HTMLElement | null>(null)

function trans () {
  if (!blockContainer.value) return
  const width = blockContainer.value.getBoundingClientRect().width
  blockContainer.value.style.height = width * props.ratio + 'px'

}

useEventListener(globalThis, 'resize', trans)
onMounted(trans)


</script>
<template>
<div v-bind="$attrs" ref="blockContainer">
  <slot></slot>
</div>
</template>