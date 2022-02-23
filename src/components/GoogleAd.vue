<script lang="ts" setup>
import { watchEffect, PropType, ref } from 'vue-demi'

const containerRef = ref<HTMLDivElement | null>(null)
const props = defineProps({
  clientId: {
    type: String as PropType<string>,
    default: '',
  },
  slotId: {
    type: String as PropType<string>,
    default: '',
  },
})

watchEffect(() => {
  if (containerRef.value) {
    const scriptElement = document.createElement('script')
    scriptElement.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${props.clientId}`
    scriptElement.crossOrigin = 'anonymous'
    scriptElement.async = true

    containerRef.value.appendChild(scriptElement)
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
  }
})

</script>
<template>
  <div v-if="clientId && slotId" ref="containerRef" class="block h-full">
    <ins
      class="adsbygoogle block h-full"
      :data-ad-client="clientId"
      :data-ad-slot="slotId"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>
