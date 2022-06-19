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
  </header>
</template>

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
</style>
