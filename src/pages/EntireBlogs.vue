<template>
  <div class="container">
    <div class="entire__blog">
      <blog-list :blogList="blogList"> </blog-list>
    </div>
  </div>
</template>

<script>
import BlogList from "../components/blog/BlogList.vue";

export default {
  components: {
    BlogList,
  },
  computed: {
    blogList() {
      return this.$store.getters["blog/blogs"];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  margin-top: 10%;

  @media (min-width: 500px) {
    margin-top: 7%;
  }

  @media (min-width: 1000px) {
    margin-top: 5%;
  }

  @media (min-width: 1500px) {
    margin-top: 3%;
  }
}
</style>
