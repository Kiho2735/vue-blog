<template>
  <div class="app">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
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

<style lang="scss">
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

a {
  text-decoration: none;
  color: #000;
}

ui {
  list-style: none;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  margin: 0 auto;
}
</style>
