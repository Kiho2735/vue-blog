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
    <hr class="divider" />
    <p class="copy-right">Copyright 2022 All Rights Reserved</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  background-color: rgb(68, 68, 68);
  position: absolute;
  bottom: 0;
  color: #fff;
}

.nav,
.divider,
.copy-right {
  width: 80vw;
  margin: 0 auto;
}

.nav {
  padding: 2.5rem 0;
  display: flex;

  & > div {
    flex: 1;
  }

  &__logo {
    margin-bottom: 1rem;
  }

  &__icons {
    display: flex;
    justify-content: start;
  }

  &__icon {
    margin: 0 0.4rem;
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

.divider {
  border: none;
  height: 1px;
  background-color: rgb(114, 114, 114);
}

.copy-right {
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0.8rem auto 2rem;
}
</style>
