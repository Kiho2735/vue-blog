<template>
  <header class="container">
    <nav class="nav">
      <div class="nav__branding">
        <h1 class="nav__logo">
          <router-link :to="{ name: 'Home' }"> Calm </router-link>
        </h1>
      </div>

      <div class="nav__menu">
        <ui class="nav__list">
          <li class="nav__item">
            <router-link to="/home">Blog</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/1">About</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/2">Contact</router-link>
          </li>
        </ui>

        <div class="nav__icon">
          <a href="" class="nav__icon-facebook">
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="fa-xl nav__icon"
          /></a>

          <a href="" class="nav__icon-instagram"
            ><font-awesome-icon
              :icon="['fab', 'instagram']"
              class="fa-xl nav__icon"
          /></a>
        </div>

        <base-button to="#">Log In</base-button>
      </div>

      <div class="mobile-action-icons">
        <font-awesome-icon
          :icon="['fa', 'bars-staggered']"
          class="fa-xl nav__bar"
          @click="openNav"
          v-if="!mobileNav"
        />
        <font-awesome-icon
          :icon="['fa', 'xmark']"
          class="fa-2xl nav__xbar"
          @click="openNav"
          v-else
        />
      </div>
    </nav>

    <transition name="mobile-nav">
      <div class="mobile__nav" v-show="mobileNav">
        <ui class="nav__list">
          <li class="nav__item">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/">Blog</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/1">About</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/2">Contact</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/">Log In</router-link>
          </li>
        </ui>

        <div class="nav__icon">
          <a href="" class="nav__icon-facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']"
          /></a>

          <a href="" class="nav__icon-instagram"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileNav: false,
    };
  },
  methods: {
    openNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  position: relative;
  transition: color 0.3s ease;
}

.nav {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 80vw;
  display: flex;
  justify-content: space-between;

  &__branding {
    display: flex;
    align-items: center;
  }

  &__menu {
    display: none;
  }

  .mobile-action-icons {
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 100;
  }

  &__xbar {
    color: #fff;
  }
}

.mobile__nav {
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #1d325d;
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2rem;

  a {
    color: #fff;
  }

  .nav__item {
    margin-bottom: 1.5rem;
  }

  .nav__icon {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    margin: 1.5rem;

    &-facebook:hover {
      color: #4e71ba;
    }

    &-instagram:hover {
      color: #e95950;
    }
  }
}

.nav__item a {
  &:hover {
    color: rgb(0, 160, 253);

    &:after {
      background-color: rgba(0, 160, 253, 1);
    }
  }

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    top: 3rem;
    left: 0;
    background-color: rgba(0, 160, 253, 0);
    transition: background-color 0.3s ease;
  }

  &.router-link-active {
    color: rgb(0, 160, 253);

    &:after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: 3rem;
      left: 0;
      background-color: rgb(0, 160, 253);
    }
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.7s ease;
}

.mobile-nav-enter-from {
  transform: translateX(80vw);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(80vw);
}

@media (min-width: 800px) {
  .mobile-action-icons {
    display: none !important;
  }

  .mobile__nav {
    display: none;
  }

  .nav__menu {
    display: flex;
  }

  .nav__list {
    display: flex;
    align-items: center;
  }

  .nav__item {
    margin-right: 3rem;
    font-size: 1.1rem;

    &:last-child {
      margin-right: 2rem;
    }

    a.router-link-active {
      color: rgb(0, 160, 253);

      &:after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        top: 1.7rem;
        left: 0;
        background-color: rgb(0, 160, 253);
      }
    }

    a:after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: 1.7rem;
      left: 0;
      background-color: rgba(0, 160, 253, 0);
      transition: background-color 0.3s ease;
    }
  }

  .nav__icon {
    display: flex;
    align-items: center;

    a {
      margin-right: 1rem;
    }

    &-facebook:hover {
      color: #4e71ba;
    }

    &-instagram:hover {
      color: #e95950;
    }
  }
}

@media (min-width: 900px) {
  .nav__item {
    margin-right: 5rem;

    &:last-child {
      margin-right: 4rem;
    }
  }

  .nav__icon {
    a {
      margin-right: 3rem;
    }
  }
}
</style>
