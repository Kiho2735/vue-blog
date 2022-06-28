<template>
  <section>
    <h2>Page not found</h2>
    <p>
      Go back to <router-link :to="{ name: 'Home' }">Home</router-link> Page.
    </p>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 80vh;
  padding: 6rem 8rem;
  font-size: 2rem;
}

a {
  text-decoration: underline;

  &:hover {
    color: red;
  }
}
</style>
