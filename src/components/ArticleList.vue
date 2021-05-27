<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  list: {
    type: Array as any,
    required: true,
    default: [],
  },
})
</script>
<template>
  <div v-bind="$attrs" class="flex flex-wrap">
    <Card
      v-if="props.list[0]"
      data-order="1"
      :cover="props.list[0].cover"
      :href="'/blog/' + props.list[0].file"
      class="w-3/4 h-32 pb-1 pr-1 mr-2 mb-2"
      style="height: 240px; width: calc(75% - 10px)"
    >
      <div class="px-4 pt-8">
        <div class="text-2xl mb-3">
          {{ props.list[0].title }}
        </div>
        <div class="ml-2 text-sm px-2 font-normal border-1 border-white inline-block mb-5">
          閲讀
        </div>
        <div class="text-sm text-right pl-4">
          {{ props.list[0].desc }}
        </div>
      </div>
    </Card>
    <Card
      v-if="props.list[1]"
      data-order="2"
      :cover="props.list[1].cover"
      :href="'/blog/' + props.list[1].file"
      style="height: 240px; width: calc(25% - 10px)"
    >
      <div class="flex flex-row-reverse h-full px-2 py-2">
        <div class="text-lg  flex-1" style="writing-mode: vertical-rl;">
          {{ props.list[1].title }}
        </div>
        <div class="text-xs break-all h-full pt-8" style="writing-mode: vertical-rl;">
          {{ props.list[1].desc }}
        </div>
      </div>
    </Card>
    <Card
      v-if="props.list[2]"
      data-order="3"
      class="mr-2 mb-2"
      :cover="props.list[2].cover || '#8EBC93'"
      :href="'/blog/' + props.list[2].file"
      style="height: 140px; width: calc(100% - 10px)"
    >
      <div class="flex flex-col-reverse h-full px-2 py-2">
        <div class="text-lg  flex-1 text-right">
          {{ props.list[2].title }}
        </div>
        <div class="text-sm break-all h-full pt-6 pl-4">
          {{ props.list[2].desc }}
        </div>
      </div>
    </Card>
    <Card
      v-if="props.list[3]"
      data-order="4"
      :cover="props.list[3].cover || '#8EBC93'"
      :href="'/blog/' + props.list[3].file"
      class="mr-2 mb-2"
      style="height: 240px; width: calc(25% - 10px)"
    >
      <div class="flex h-full px-2 py-2">
        <div class="text-lg md:whitespace-nowrap" style="writing-mode: vertical-lr;">
          {{ props.list[3].title }}
        </div>
        <div class="text-xs break-all h-full py-4 flex-1" style="writing-mode: vertical-lr;">
          {{ props.list[3].desc }}
        </div>
      </div>
    </Card>
    <Card
      v-if="props.list[4]"
      data-order="5"
      :cover="props.list[4].cover || '#D6B663'"
      :href="'/blog/' + props.list[4].file"
      class="mr-2 mb-2"
      style="height: 240px; width: calc(25% - 10px)"
    >
      <div class="flex h-full px-2 py-2">
        <div class="text-lg md:whitespace-nowrap" style="writing-mode: vertical-lr;">
          {{ props.list[4].title }}
        </div>
        <div class="text-xs break-all h-full py-4 flex-1" style="writing-mode: vertical-lr;">
          {{ props.list[4].desc }}
        </div>
      </div>
    </Card>
    <Card
      v-if="props.list[5]"
      data-order="6"
      :cover="props.list[5].cover || '#8675B5'"
      :href="'/blog/' + props.list[5].file"
      class="mr-2 mb-2"
      style="height: 240px; width: calc(25% - 10px)"
    >
      <div class="flex h-full px-2 py-2">
        <div class="text-lg md:whitespace-nowrap" style="writing-mode: vertical-lr;">
          {{ props.list[5].title }}
        </div>
        <div class="text-xs break-all h-full py-4 flex-1" style="writing-mode: vertical-lr;">
          {{ props.list[5].desc }}
        </div>
      </div>
    </Card>
    <Card
      v-if="props.list[6]"
      data-order="7"
      :cover="props.list[6].cover || '#8675B5'"
      :href="'/blog/' + props.list[6].file"
      class="mr-2 mb-2"
      style="height: 240px; width: calc(25% - 10px)"
    >
      <div class="flex h-full px-2 py-2">
        <div class="text-lg md:whitespace-nowrap" style="writing-mode: vertical-lr;">
          {{ props.list[6].title }}
        </div>
        <div class="text-xs break-all h-full py-4 flex-1" style="writing-mode: vertical-lr;">
          {{ props.list[6].desc }}
        </div>
      </div>
    </Card>
  </div>
</template>
