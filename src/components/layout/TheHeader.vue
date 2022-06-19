<template>
  <header class="container">
    <nav class="nav">
      <div class="nav__header">
        <h1><router-link to="/"> KHL </router-link></h1>

        <div class="nav__menu">
          <ui class="nav__list">
            <li class="nav__item">
              <router-link to="/">Daily</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/">Food</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/">Travel</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/">Sport</router-link>
            </li>
          </ui>
        </div>

        <base-button to="/">Sign In</base-button>

        <!-- <div class="nav__icons">
          <font-awesome-icon :icon="['fas', 'user']" class="fa-2xl" />
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="fa-2xl" />
        </div> -->
      </div>

      <div class="nav__hero">
        <h4>This is Kiho's Blog</h4>
        <h1>Welcome!</h1>
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
  display: flex;
  flex-direction: column;
}

.nav__header {
  display: flex;
  justify-content: space-between;
}

.nav__menu {
  margin-top: calc(0.83em * 2);
}

.nav__list {
  list-style: none;
  display: flex;
}

.nav__item a {
  padding: 0.5rem;
}

.nav__item a:active,
.nav__item a:hover,
.nav__item a.router-link-active {
  color: rgb(217, 0, 255);
}

.nav__hero {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
