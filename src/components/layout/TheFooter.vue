<template>
  <footer class="container">
    <div class="nav">
      <div class="nav__header">
        <h1 class="nav__logo">Calm</h1>
        <div class="nav__icons">
          <a href="" class="nav__icon nav__icon-facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-xl"
          /></a>

          <a href="" class="nav__icon nav__icon-instagram"
            ><font-awesome-icon :icon="['fab', 'instagram']" class="fa-xl"
          /></a>
        </div>
      </div>

      <div claass="nav__menu">
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
      </div>
    </div>
    <hr />
    <p class="copy-right">Copyright 2022 All Rights Reserved</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: 0;
  color: #fff;
  background-color: #333;
  padding: 3rem 9.5rem;
}

.nav {
  display: flex;
  margin-bottom: 1rem;

  &__header {
    margin-right: 3rem;
  }

  &__logo {
    margin-bottom: 1rem;
  }

  &__icons {
    display: flex;
    justify-content: space-around;
  }

  &__icon {
    color: #fff;
    transition: color 0.3s ease-out;

    &-facebook:hover {
      color: #4e71ba;
    }

    &-instagram:hover {
      color: #e95950;
    }
  }

  &__list {
    list-style-type: none;
    // padding-top: 1rem;
  }

  &__item a {
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    padding-bottom: 1rem;
    transition: color 0.3s ease-out;

    &:hover {
      color: rgb(0, 160, 253);
    }
  }
}

.copy-right {
  margin-top: 1rem;
}
</style>
