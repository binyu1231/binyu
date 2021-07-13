<template>
  <aside
    class="relative mt-12 lg:mt-0 lg:w-64 lg:ml-16 lg:flex-shrink-0"
    data-aos="fade-down"
    data-aos-delay="400"
  >
    <!-- Popular posts -->
    <div class="mb-8">
      <h4 class="h4 font-red-hat-display mb-5">Popular Practices</h4>
      <ul class="-my-3">
        <li class="flex py-3 border-b border-gray-200 dark:border-gray-800">
          <div class="order-count">01</div>
          <article>
            <router-link class="hover:underline" to="/blog-post">
              <h3 class="font-red-hat-display font-bold tracking-tight mb-1">Languages</h3>
            </router-link>
            <div class="text-gray-500 flex items-center text-3xl">
              <bx-bxl-javascript class="hover:text-gray-900" />
              <bx-bxl-python class="hover:text-gray-900"/>
              <bx-bxl-css3  class="hover:text-gray-900" />
              <cib-svg  class="text-2xl hover:text-gray-900" />
            </div>
          </article>
        </li>
        <li class="flex py-3 border-b border-gray-200 dark:border-gray-800">
          <div
            class="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1"
          >02</div>
          <article>
            <router-link class="hover:underline" to="/blog-post">
              <h3 class="font-red-hat-display font-bold tracking-tight mb-1 flex items-center">
                Quick Tool
                <eva-external-link-fill class="ml-2" />
              </h3>
            </router-link>
            <div class="text-gray-500  flex items-center text-3xl">
              <bx-bx-wind />
              <simple-icons-iconify class="text-2xl" />
              <bx-bxl-figma />
              <span class="text-2xl">[af]</span>
            </div>
          </article>
        </li>
        <li class="flex py-3 border-b border-gray-200 dark:border-gray-800">
          <div
            class="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1"
          >03</div>
          <article>
            <router-link class="hover:underline" to="/blog-post">
              <h3 class="font-red-hat-display font-bold tracking-tight mb-1">Front-End</h3>
            </router-link>
            <div class="text-gray-500  flex items-center text-3xl">
              <bx-bxl-vuejs />
              <bx-bxl-react />
              <file-icons-vite class="text-2xl" />
            </div>
          </article>
        </li>
        <li class="flex py-3 border-b border-gray-200 dark:border-gray-800">
          <div
            class="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1"
          >04</div>
          <article>
            <router-link class="hover:underline" to="/blog-post">
              <h3 class="font-red-hat-display font-bold tracking-tight mb-1">Server End</h3>
            </router-link>
            <div class="text-gray-500  flex items-center text-3xl">
              <fa-brands-docker />
              <bx-bxl-kubernetes />
              <fa-brands-node-js />
              <cib-flask />
            </div>
          </article>
        </li>
        <li class="flex py-3 border-b border-gray-200 dark:border-gray-800">
          <div
            class="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1"
          >05</div>
          <article>
            <router-link class="hover:underline" to="/blog-post">
              <h3 class="font-red-hat-display font-bold tracking-tight mb-1">CI CD</h3>
            </router-link>
            <div class="text-gray-500  flex items-center text-3xl">
              <bx-bxl-github />
            </div>
          </article>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style lang="postcss">
.order-count {
  @apply h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1;
}
</style>