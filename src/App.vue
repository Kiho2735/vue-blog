<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap");

* {
  box-sizing: border-box;
  font-family: "Oswald", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(255, 255, 255);
}

.container {
  width: 70vw;
  margin: 0 auto;
}
</style>
