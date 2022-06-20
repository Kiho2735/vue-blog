<template>
  <header class="container">
    <nav class="nav">
      <div class="nav__header">
        <h1 class="nav__logo">
          <router-link :to="{ name: 'Home' }"> Calm </router-link>
        </h1>

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

          <div class="nav__icons">
            <a href="">
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                class="fa-xl nav__icon nav__icon-facebook"
            /></a>

            <a href=""
              ><font-awesome-icon
                :icon="['fab', 'instagram']"
                class="fa-xl nav__icon nav__icon-instagram"
            /></a>
          </div>

          <base-button to="#">Log In</base-button>
        </div>
      </div>
    </nav>

    <font-awesome-icon
      :icon="['fa', 'bars-staggered']"
      class="fa-xl nav__bar"
      @click="openNav"
    />

    <transition name="mobile-nav">
      <div class="mobile__nav" v-show="mobileNav">
        <ui class="mobile__nav__list">
          <li class="mobile__nav__item">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="mobile__nav__item">
            <router-link to="/">Blog</router-link>
          </li>
          <li class="mobile__nav__item">
            <router-link to="/1">About</router-link>
          </li>
          <li class="mobile__nav__item">
            <router-link to="/2">Contact</router-link>
          </li>
          <li class="mobile__nav__item">
            <router-link to="/">Log In</router-link>
          </li>
        </ui>

        <div class="mobile__nav__icons">
          <a href="">
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="fa-2xl mobile__nav__icon mobile__nav__icon-facebook"
          /></a>

          <a href=""
            ><font-awesome-icon
              :icon="['fab', 'instagram']"
              class="fa-2xl mobile__nav__icon mobile__nav__icon-instagram"
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
  text-decoration: none;
  color: #000;
}

.nav {
  margin-top: 30px;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    font-size: 1.8rem;
  }

  &__menu {
    display: flex;
  }

  &__list {
    list-style: none;
    display: flex;
    margin-right: 10px;
    align-items: center;
  }

  &__icons {
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
}

.nav__item {
  font-size: 1.1rem;
  margin-right: 5rem;

  &:last-child {
    margin-right: 2rem;
  }

  a {
    position: relative;
    transition: color 0.3s ease-out;

    &:hover {
      color: rgb(0, 160, 253);
    }

    &.router-link-active {
      color: rgb(0, 160, 253);

      &:after {
        content: "";
        width: 100%;
        height: 4px;
        position: absolute;
        top: 1.8rem;
        left: 0;
        background-color: rgb(0, 160, 253);
      }
    }

    &:after {
      content: "";
      width: 0;
      height: 4px;
      position: absolute;
      top: 1.8rem;
      left: 0;
      background-color: rgb(0, 160, 253);
      transition: all 0.3s;
    }

    &:hover:after {
      width: 100%;
    }
  }
}

.nav__icon {
  padding: 0 0.7rem;
  transition: color 0.3s ease-out;

  &-facebook:hover {
    color: #4e71ba;
  }

  &-instagram:hover {
    color: #e95950;
  }
}

.mobile__nav,
.nav__bar {
  display: none;
}

@media screen and (max-width: 992px) {
  .nav__header div {
    display: none;
  }

  .nav__bar {
    display: block;
    color: #000;
    font-size: 2.5rem;
    z-index: 100;
    position: fixed;
    right: 50px;
    top: 35px;
    cursor: pointer;
  }

  .mobile__nav {
    background-color: #1d325d;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__list {
      list-style: none;
      font-size: 2.5rem;
    }

    &__item {
      margin-bottom: 20px;

      a {
        position: relative;
        color: #fff;
        transition: color 0.3s ease-out;

        &:hover {
          color: rgb(0, 160, 253);
        }

        &.router-link-active {
          color: rgb(0, 160, 253);

          &:after {
            content: "";
            width: 100%;
            height: 4px;
            position: absolute;
            top: 4rem;
            left: 0;
            background-color: rgb(0, 160, 253);
          }
        }

        &:after {
          content: "";
          width: 0;
          height: 4px;
          position: absolute;
          top: 4rem;
          left: 0;
          background-color: rgb(0, 160, 253);
          transition: all 0.3s;
        }

        &:hover:after {
          width: 100%;
        }
      }
    }
  }

  .mobile__nav__icons {
    position: relative;
    right: -60px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .mobile__nav__icon {
    color: #fff;
    transition: color 0.3s ease-out;

    &-facebook {
      margin-bottom: 20px;
    }

    &-facebook:hover {
      color: #4e71ba;
    }

    &-instagram:hover {
      color: #e95950;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(100vw);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(100vw);
  }
}
</style>
