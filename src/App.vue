<template>
  <div class="app">
    <the-header v-if="!navigationDisabled"></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
