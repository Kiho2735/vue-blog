<template>
  <div class="app">
    <the-header v-if="!navigationDisabled"></the-header>
    <router-view></router-view>
    <the-footer v-if="!navigationDisabled"></the-footer>
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
  data() {
    return {
      navigationDisabled: null,
    };
  },
  methods: {
    checkRoute() {
      const routeName = this.$route.name;
      if (
        routeName == "Not Found" ||
        routeName == "Login" ||
        routeName == "Register" ||
        routeName == "Reset Password"
      ) {
        this.navigationDisabled = true;
      } else {
        this.navigationDisabled = false;
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
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
