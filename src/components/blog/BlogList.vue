<template>
  <slot>
    <h2>Entire Blog Posts</h2>
    <div class="blog-card">
      <blog-card
        v-for="(blog, index) in blogList"
        :key="index"
        :title="blog.title"
        :previewImage="blog.previewImage"
        :date="blog.date"
      >
      </blog-card>
    </div>
  </slot>

  <div class="recent-blog-card">
    <blog-card
      v-for="(blog, index) in blogList"
      :key="index"
      :title="blog.title"
      :previewImage="blog.previewImage"
      :date="blog.date"
    >
    </blog-card>
  </div>
</template>

<script>
import BlogCard from "../ui/BlogCard.vue";

export default {
  components: {
    BlogCard,
  },
  props: ["blogList"],
};
</script>

<style lang="scss" scoped></style>
