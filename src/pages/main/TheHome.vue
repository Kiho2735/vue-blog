<template>
  <div class="container">
    <div class="welcome">
      <div class="welcome__msg">
        <h2 class="welcome__title">Welcome!</h2>
        <p class="welcome__introduce">
          This is a personal blog. You can explore many interesting types of
          blog posts.
        </p>
        <router-link to="#">Explore blogs</router-link>
      </div>
      <div class="welcome__img">
        <img src="../../assets/welcomeImage.png" alt="welcomeImage" />
      </div>
    </div>
    <div class="recent__blog"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
