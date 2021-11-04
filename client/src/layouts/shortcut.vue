<template>
  <PageLayout
    cover="https://xinghe-blog-bucket.oss-cn-beijing.aliyuncs.com/img/blog-coloration-cover.jpg"
  >
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-6 pt-10 md:pb-10 md:pt-14" data-aos="fade-down">
          <h2 class="h2 font-red-hat-display">Coding Shortcut</h2>
        </div>

        <div
          class="max-w-xs sm:max-w-none mx-auto md:max-w-none lg:max-w-none grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3"
          data-aos-id-rellinks
        >
          <router-link to="/language/javascript">
            <FeatureCard
              title="JavaScript"
              class="bg-gradient-to-tr from-teal-500 to-teal-400 dark:to-teal-500"
              data-aos-delay="100"
            >
              <bx-bxl-javascript class="w-8 h-8" />
            </FeatureCard>
          </router-link>

          <router-link to="/server-end/docker">
            <FeatureCard
              title="Docker"
              class="bg-gradient-to-tr from-purple-500 to-purple-400 dark:to-purple-500"
              data-aos-delay="200"
            >
              <fa-brands-docker class="w-8 h-8" />
            </FeatureCard>
          </router-link>
          <router-link to="/language/snippets">
            <FeatureCard
              title="Code Snippets"
              class="bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 sm:col-span-2 md:col-auto"
              data-aos-delay="300"
            >
              <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="fill-current"
                  d="M11.697 9.254l-4.3-4.3a14.14 14.14 0 00-2.443 2.442l4.3 4.3a8.03 8.03 0 012.443-2.442zm1.932-.896a8.036 8.036 0 014.742 0l4.538-4.538a14.027 14.027 0 00-13.818 0l4.538 4.538zm6.674.896a8.03 8.03 0 012.443 2.443l4.3-4.3a14.14 14.14 0 00-2.443-2.443l-4.3 4.3zm3.339 4.375a8.036 8.036 0 010 4.742l4.538 4.538a14.027 14.027 0 000-13.818l-4.538 4.538zm-.896 6.674a8.029 8.029 0 01-2.443 2.443l4.3 4.3a14.14 14.14 0 002.443-2.443l-4.3-4.3zm-4.375 3.34a8.036 8.036 0 01-4.742 0L9.091 28.18a14.027 14.027 0 0013.818 0l-4.538-4.538zm-6.674-.897a8.029 8.029 0 01-2.443-2.443l-4.3 4.3a14.14 14.14 0 002.443 2.443l4.3-4.3zm-3.34-4.375a8.036 8.036 0 010-4.742L3.82 9.09a14.027 14.027 0 000 13.818l4.538-4.538zm18.956 8.943c-6.248 6.248-16.378 6.248-22.627 0-6.248-6.249-6.248-16.38 0-22.628 6.249-6.248 16.38-6.248 22.627 0 6.249 6.249 6.249 16.38 0 22.628zm-7.07-7.071a6 6 0 10-8.486-8.486 6 6 0 008.485 8.486z"
                />
              </svg>
            </FeatureCard>
          </router-link>
          <FeatureCard
            title="Design Pattern"
            class="bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 sm:col-span-2 md:col-auto"
            data-aos-delay="300"
          >
            <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                class="fill-current"
                d="M11.697 9.254l-4.3-4.3a14.14 14.14 0 00-2.443 2.442l4.3 4.3a8.03 8.03 0 012.443-2.442zm1.932-.896a8.036 8.036 0 014.742 0l4.538-4.538a14.027 14.027 0 00-13.818 0l4.538 4.538zm6.674.896a8.03 8.03 0 012.443 2.443l4.3-4.3a14.14 14.14 0 00-2.443-2.443l-4.3 4.3zm3.339 4.375a8.036 8.036 0 010 4.742l4.538 4.538a14.027 14.027 0 000-13.818l-4.538 4.538zm-.896 6.674a8.029 8.029 0 01-2.443 2.443l4.3 4.3a14.14 14.14 0 002.443-2.443l-4.3-4.3zm-4.375 3.34a8.036 8.036 0 01-4.742 0L9.091 28.18a14.027 14.027 0 0013.818 0l-4.538-4.538zm-6.674-.897a8.029 8.029 0 01-2.443-2.443l-4.3 4.3a14.14 14.14 0 002.443 2.443l4.3-4.3zm-3.34-4.375a8.036 8.036 0 010-4.742L3.82 9.09a14.027 14.027 0 000 13.818l4.538-4.538zm18.956 8.943c-6.248 6.248-16.378 6.248-22.627 0-6.248-6.249-6.248-16.38 0-22.628 6.249-6.248 16.38-6.248 22.627 0 6.249 6.249 6.249 16.38 0 22.628zm-7.07-7.071a6 6 0 10-8.486-8.486 6 6 0 008.485 8.486z"
              />
            </svg>
          </FeatureCard>

        </div>
      </div>
    </div>

    <router-view />
  </PageLayout>
</template>
