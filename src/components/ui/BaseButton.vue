<template>
  <router-link :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default: "/",
    },
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #fff;
  background-color: rgb(217, 0, 255);
  border-radius: 14px;
  padding: 0.6rem 1.5rem 0.4rem;
  margin: 0.83em 0;
}

a:hover,
a:active {
  background-color: rgba(217, 0, 255, 0.616);
}
</style>
