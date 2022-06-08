<template>
  <header class="container">
    <nav class="nav">
      <div class="nav__header">
        <router-link to="/">
          <img
            src="../../assets/Boni-Soir-logo.svg"
            alt="logo"
            class="nav__logo"
          />
        </router-link>

        <div>
          <input
            type="text"
            class="nav__search-bar"
            placeholder="Please enter item"
          />
        </div>

        <div class="nav__icons">
          <font-awesome-icon :icon="['fas', 'user']" class="fa-2xl" />
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="fa-2xl" />
        </div>
      </div>

      <div class="nav__menu">
        <ui class="nav__list">
          <li class="nav__item">
            <router-link to="/">On Sale</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/">New</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/">Best</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/">Special</router-link>
          </li>
        </ui>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
}

.nav {
  display: flex;
  flex-direction: column;
}

.nav__header {
  display: flex;
  justify-content: space-between;
}

.nav__search-bar {
  margin-top: 10px;
  border-radius: 25px;
  padding: 20px;
}

.nav__list {
  list-style: none;
  display: flex;
}

.nav__logo {
  width: 10rem;
}
</style>
