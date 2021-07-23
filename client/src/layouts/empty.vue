<template>
  <PageLayout>
    <section class="relative">
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <ArticleHelper>
            <router-view />
          </ArticleHelper>
        </div>
      </div>
      <Comments />
    </section>
  </PageLayout>
</template>