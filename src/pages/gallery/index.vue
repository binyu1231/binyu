<script lang="ts">
import { defineComponent } from 'vue'
// @ts-ignore
import config from '../../../public/gallery/data.js'

export default defineComponent({

  setup() {
    const { prefix, data } = config

    const list = data.slice(0, 4).map((d: any) => {
      return {
        url: `${prefix}${d.date}-1.${d.suffix || 'jpg'}`,
      }
    })

    return {
      list,
    }
  },
})
</script>
<template>
  <div>
    <div v-for="(item) in list" :key="item.url" class="p-2 lg:w-1/4 md:w-1/3 w-1/2 float-left">
      <img class="block" :src="item.url" />
    </div>
  </div>
</template>
