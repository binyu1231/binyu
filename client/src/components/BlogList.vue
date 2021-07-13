<script lang="ts" setup>
import { ref } from 'vue-demi'
import ReactiveBlock from './ReactiveBlock.vue';

const props = defineProps({
  posts: {
    default: () => ([])
  }
})

const moreVisible = ref<boolean>(false)
</script>
<template>
  <section>
    <div class="lg:flex-grow" data-aos="fade-down" data-aos-delay="200">
      <!-- Section title -->
      <h4 class="h3 font-red-hat-display mb-8">
        Latest
      </h4>

      <!-- Articles container -->
      <div class="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
        <!-- 1st article -->
        <article 
          class="flex flex-col h-full"
          v-for="p in props.posts.slice(0, 6)">
          <header>
            <router-link class="block mb-4" :to="`/blog/${p.file}`">
              <figure class="pb-9/16">
                <ReactiveBlock :ratio="0.7" class="bg-cover" :style="{ backgroundImage: `url(${p.cover})`}">
                </ReactiveBlock>
              </figure>
            </router-link>
            <router-link class="hover:underline" :to="`/blog/${p.file}`">
              <h3 class="h4 font-red-hat-display mb-2">
                {{ p.title }}
              </h3>
            </router-link>
          </header>
          <p class="text-gray-600 dark:text-gray-400 flex-grow">
            {{ p.desc }}
          </p>
          <footer class="flex items-center mt-4">
            <a href="#0">
              <img class="rounded-full flex-shrink-0 mr-3" src="../images/news-author-03.jpg" width="32" height="32" alt="Author 03" />
            </a>
            <div class="text-sm text-gray-500">
              By <a class="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Binyu</a> · <span class="text-gray-500">{{ p.date }}</span>
            </div>
          </footer>
        </article>

        <article 
          class="flex flex-col h-full"
          v-if="moreVisible"
          v-for="p in props.posts.slice(6)">
          <header>
            <router-link class="block mb-4" :to="`/blog/${p.file}`">
              <figure class="pb-9/16">
                <ReactiveBlock :ratio="0.7" class="bg-cover" :style="{ backgroundImage: `url(${p.cover})`}">
                </ReactiveBlock>
              </figure>
            </router-link>
            <router-link class="hover:underline" :to="`/blog/${p.file}`">
              <h3 class="h4 font-red-hat-display mb-2">
                {{ p.title }}
              </h3>
            </router-link>
          </header>
          <p class="text-gray-600 dark:text-gray-400 flex-grow">
            {{ p.desc }}
          </p>
          <footer class="flex items-center mt-4">
            <a href="#0">
              <img class="rounded-full flex-shrink-0 mr-3" src="../images/news-author-03.jpg" width="32" height="32" alt="Author 03" />
            </a>
            <div class="text-sm text-gray-500">
              By <a class="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Binyu</a> · <span class="text-gray-500">{{ p.date }}</span>
            </div>
          </footer>
        </article>
      </div>

      <!-- Load more button -->
      <div class="flex justify-center mt-12 md:mt-16">
        <a
          @click="moreVisible = true"
          v-if="!moreVisible"
          class="btn-sm text-gray-300 hover:text-gray-100 bg-gray-800 flex items-center" 
          href="#0">
          <span>See previous articles</span>
          <svg class="w-4 h-4 flex-shrink-0 ml-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-current text-gray-500" d="M14.7 9.3l-1.4-1.4L9 12.2V0H7v12.2L2.7 7.9 1.3 9.3 8 16z" />
          </svg>
        </a>
      </div>
    </div>
    
  </section>
</template>