<script lang="ts" setup>
import posts from '~/meta/posts.json'
const hero = posts[0]
const normals = posts.slice(1)
</script>
<template>
  <PageLayout :cover="hero.cover">
    <HeroBlog :post="hero" />
    <FeaturedPosts />
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="lg:flex lg:justify-between">
          <!-- Main content -->
          <BlogList :posts="normals" />
          <!-- Sidebar -->
          <PracticeList />
        </div>
      </div>
    </div>
  </PageLayout>
</template>