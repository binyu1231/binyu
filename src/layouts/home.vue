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
        <!-- Main content -->
        <BlogList :posts="normals" />
      </div>
    </div>
  </PageLayout>
</template>
