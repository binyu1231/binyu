<script lang="ts">
import { defineComponent } from 'vue'
import config from '../../public/gallery/data.js'

export default defineComponent({

  setup() {
    const { prefix, data } = config

    const list = data.slice(0, 4).map((d: any) => {
      return `${prefix}${d.date}-1.${d.suffix || 'jpg'}`
    })

    return {
      list,
    }
  },
})
</script>
<template>
  <div v-bind="$attrs" class="flex flex-wrap">
    <Card
      :cover="list[0]"
      href="/gallery"
      class="pb-1 pr-1 mr-2 mb-2"
      style="height: 390px; width: calc(50% - 10px)"
    >
    </Card>
    <div class="" style="height: 390px; width: calc(50% - 10px)">
      <Card
        :cover="list[1]"
        href="/gallery"
        class="pb-1 pr-1 mr-2 mb-2 block"
        style="height: 240px;"
      >
      </Card>
      <Card
        :cover="list[2]"
        href="/gallery"
        class="pb-1 pr-1 mr-2 mb-2 block"
        style="height: 140px;"
      >
      </Card>
    </div>
    <!-- <div style="height: 240px; width: calc(50% - 10px)">
      <Card
        cover="#b47272"
        class="mr-2 mb-2 w-full h-full"
      >
      </Card>
      <Card
        cover="#b47272"
        class="mr-2 mb-2 w-full h-full"
      >
      </Card>
    </div> -->

    <Card
      :cover="list[3]"
      class="mr-2 mb-2"
      href="/gallery"
      style="height: 240px; width: calc(100% - 20px)"
    >
      <!-- <div class="flex h-full px-2 py-2">
        <div class="text-lg " style="writing-mode: vertical-rl;">
          《夜晚的潛水艇》
        </div>
        <div class="text-xs break-all h-full py-4 flex-1" style="writing-mode: vertical-rl;">
          “游荡于旧山河与未知宇宙间，汉语的一种风度与可能性”
        </div>
      </div> -->
    </Card>
  </div>
</template>
