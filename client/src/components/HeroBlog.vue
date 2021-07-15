<script lang="ts" setup>
const props = defineProps({
  post: {
    default: () => ({ cover: '', title: '', desc: '', date: '', file: '' }),
  },
})
</script>
<template>
  <section class="relative">
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-16">
        <!-- Featured article -->
        <div class="max-w-3xl" data-aos="fade-down">
          <article>
            <header>
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <router-link class="hover:underline" :to="`/blog/${props.post.file}`">
                  <h1 class="h1 font-red-hat-display mb-4">
                    {{ props.post.title }}
                  </h1>
                </router-link>
                <p class="text-xl text-gray-600 dark:text-gray-400">
                  {{ props.post.desc }}
                </p>
              </div>
              <!-- Article meta -->
              <div class="md:flex md:items-center md:justify-between mt-5">
                <!-- Author meta -->
                <div class="flex items-center justify-center">
                  <a href="#0">
                    <img class="rounded-full flex-shrink-0 mr-3" src="../images/news-author-01.jpg" width="32" height="32" alt="Author 04" />
                  </a>
                  <div>
                    <span class="text-gray-600 dark:text-gray-400">By </span>
                    <a class="font-medium text-gray-800 dark:text-gray-300 hover:underline" href="#0">Micheal Osman</a>
                    <span class="text-gray-600 dark:text-gray-400"> · {{ props.post.date }}</span>
                  </div>
                </div>
              </div>
            </header>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
