<script lang="ts" setup>
const props = defineProps({
  post: {
    default: () => ({
      title: '',
      cover: '',
      date: '',
      desc: ''
    })

  }
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
                >{{ props.post.title }}</h1>
                <p
                  class="text-xl text-gray-600 dark:text-gray-400"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >{{ props.post.desc }}</p>
              </div>
              <!-- Article meta -->
              <div class="md:flex md:items-center md:justify-between mt-5">
                <!-- Author meta -->
                <div
                  class="flex items-center justify-center"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <a href="#0">
                    <img
                      class="rounded-full flex-shrink-0 mr-3"
                      src="../images/news-author-01.jpg"
                      width="32"
                      height="32"
                      alt="Author 04"
                    />
                  </a>
                  <div>
                    <span class="text-gray-600 dark:text-gray-400">By</span>
                    <a
                      class="font-medium text-gray-800 dark:text-gray-300 hover:underline"
                      href="#0"
                    >Binyu</a>
                    <span class="text-gray-600 dark:text-gray-400">· {{ props.post.date }}</span>
                  </div>
                </div>
              </div>
            </header>
            <hr
              class="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8"
              data-aos="fade-down"
              data-aos-delay="450"
            />

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

