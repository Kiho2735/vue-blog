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
            <router-link :to="{ name: 'Blog' }">Blog</router-link>
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

        <base-button :to="{ name: 'Login' }" v-if="!isAuthenticated"
          >Log In</base-button
        >
        <div v-else class="profile-container">
          <div class="profile-initial" @click="openProfile">
            {{ this.$store.getters["auth/initial"] }}
          </div>
          <div class="profile-menu" v-if="profile">
            <div class="info">
              <div class="info__initial">
                {{ this.$store.getters["auth/initial"] }}
              </div>
              <div class="info__right">
                <p>
                  {{ this.$store.getters["auth/firstName"] }}
                  {{ this.$store.getters["auth/lastName"] }}
                </p>
                <p>{{ this.$store.getters["auth/username"] }}</p>
                <p>{{ this.$store.getters["auth/email"] }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option__link" to="#">
                  <p>Profile</p>
                </router-link>
              </div>
              <div class="option">
                <router-link class="option__link" to="#">
                  <p>Admin</p>
                </router-link>
              </div>
              <div class="option">
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
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

    <div class="mobileBackground" v-show="mobileNav"></div>

    <transition name="mobile-nav">
      <div class="mobile__nav" v-show="mobileNav">
        <ui class="nav__list">
          <li class="nav__item">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'Blog' }">Blog</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/1">About</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/2">Contact</router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'Login' }">Log In</router-link>
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
      profile: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
  methods: {
    openNav() {
      this.mobileNav = !this.mobileNav;
    },
    openProfile() {
      this.profile = !this.profile;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  position: relative;
  transition: color 0.3s ease;
}

.container {
  width: 100vw;
  background-color: #fff;
}

.nav {
  margin: 20px auto;
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

  .profile-container {
    position: relative;
  }

  .profile-initial {
    background-color: rgb(0, 160, 253);
    color: #fff;
    padding: 0.5rem 0.7rem;
    border-radius: 50%;
    font-weight: 500;
    cursor: pointer;
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

.profile-menu {
  position: absolute;
  right: 0.2rem;
  top: 3rem;
  background-color: rgb(151, 151, 151);
  color: #fff;
  border-radius: 5px;

  .info {
    padding: 1rem;
    border-bottom: 1px solid #fff;
    display: flex;

    &__initial {
      padding: 1rem;
      margin: 0.6rem;
      margin-right: 1rem;
      border-radius: 50%;
      background-color: #fff;
      color: #000;
      font-size: 1.2rem;
    }

    &__right {
      p:first-child {
        font-size: 1.4rem;
      }
    }
  }

  .options {
    .option {
      padding: 0.4rem 1rem;

      &__link {
        color: #fff;
      }
    }
  }
}

.mobileBackground {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e0e0e0;
  opacity: 0.5;
  z-index: 99;
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

  .mobileBackground {
    display: none;
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
    font-size: 1rem;

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
        top: 1.5rem;
        left: 0;
        background-color: rgb(0, 160, 253);
      }
    }

    a:after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: 1.5rem;
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

    &-facebook,
    &-instagram {
      width: 35px;
      height: 35px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
    }

    &-facebook:hover {
      background-color: #4e71ba;
      color: #fff;
    }

    &-instagram:hover {
      background-color: #e95950;
      color: #fff;
    }
  }
}

@media (min-width: 900px) {
  .nav__item {
    margin-right: 3rem;
  }

  .nav__icon {
    a {
      margin-right: 1rem;
    }
  }
}
</style>
