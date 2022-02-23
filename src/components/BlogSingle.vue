<script lang="ts" setup>
const props = defineProps({
  post: {
    default: () => ({
      title: '',
      cover: '',
      date: '',
      desc: '',
    }),

  },
})

</script>
<template>
  <section class="relative">
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div>
          <article>
            <!-- Article header -->
            <header class="mb-8">
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <h1
                  class="h1 font-red-hat-display mb-4"
                  :class="{ '-m-6': props.post.title.startsWith('《') }"
                  data-aos="fade-down"
                >
                  {{ props.post.title }}
                </h1>
                <p
                  class="text-xl text-gray-600 dark:text-gray-400"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  {{ props.post.desc }}
                </p>
              </div>
            </header>
            <!-- Article content -->
            <div
              class="text-lg text-gray-600 dark:text-gray-400"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <slot></slot>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
