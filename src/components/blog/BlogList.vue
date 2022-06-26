<template>
  <div class="blog-card-container">
    <div>
      <h2 class="title"><slot> </slot></h2>

      <router-link to="#">
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
      </router-link>
    </div>
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

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.blog-card-container {
  width: 100vw;
  background-color: #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  div {
    width: 80vw;
    display: flex;
    flex-direction: column;
  }
}

.recent-blog-card {
  //   display: grid;
  //   gap: 32px;
  //   grid-template-columns: 1fr;
}
</style>
