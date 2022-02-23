<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const blockAdContent = ref('')

onMounted(() => {
  const adDom = document.getElementById('blog-ad-block')
  if (adDom)
    blockAdContent.value = adDom.innerHTML
})
</script>
<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-16">
        <div class="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos-id-featposts>
          <!-- 1st article -->
          <article class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="100">
            <figure>
              <img class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src="../images/related-post-03.jpg" width="258" height="154" alt="Related post 03" />
              <div class="absolute inset-0 bg-teal-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col h-full text-white">
              <header class="flex-grow">
                <router-link class="hover:underline" to="/colorations">
                  <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                    Coloration Code Documents
                    <br />
                  </h3>
                </router-link>
              </header>
              <footer>
                <div class="text-sm opacity-80">
                  Independent development
                </div>
              </footer>
            </div>
          </article>

          <!-- 2nd article -->
          <article class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="200">
            <figure>
              <img class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src="../images/related-post-05.jpg" width="258" height="154" alt="Related post 04" />
              <div class="absolute inset-0 bg-purple-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col h-full text-white">
              <header class="flex-grow">
                <router-link class="hover:underline" to="/shortcut">
                  <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                    Coding Shortcut
                  </h3>
                </router-link>
              </header>
              <footer>
                <div class="text-sm opacity-80">
                  Better Practice
                </div>
              </footer>
            </div>
          </article>
          <article
            class="relative"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-featposts]"
            data-aos-delay="200"
          >
          </article>
          <article
            class="relative bg-gray-50 dark:bg-gray-700"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-featposts]"
            data-aos-delay="200"
          >
            <GoogleAd
              slot-id="8497000173"
              client-id="ca-pub-7479088543794946"
            />
          </article>

          <!-- 3rd article -->
          <!-- <article class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="300">
            <figure>
              <img class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src="../images/related-post-04.jpg" width="258" height="154" alt="Related post 05" />
              <div class="absolute inset-0 bg-indigo-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col h-full text-white">
              <header class="flex-grow">
                <router-link class="hover:underline" to="/blog-post">
                  <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                    Lifily Pictures
                  </h3>
                </router-link>
              </header>
              <footer>
                <div class="text-sm opacity-80">By Josh Wang · Nov 10, 2020</div>
              </footer>
            </div>
          </article> -->

          <!-- 4th article -->
          <!-- <article class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="400">
            <figure>
              <img class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src="../images/related-post-06.jpg" width="258" height="154" alt="Related post 06" />
              <div class="absolute inset-0 bg-pink-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col h-full text-white">
              <header class="flex-grow">
                <router-link class="hover:underline" to="/blog-post">
                  <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                    Music half pie
                  </h3>
                </router-link>
              </header>
              <footer>
                <div class="text-sm opacity-80">By Mary Champ · Nov 2, 2020</div>
              </footer>
            </div>
          </article> -->
        </div>
      </div>
    </div>
  </section>
</template>
