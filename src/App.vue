<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
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
  width: 100vw;
  padding: 0 9.5rem;
}
</style>
