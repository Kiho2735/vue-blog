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
  background-color: rgb(0, 160, 253);
  border-radius: 14px;
  padding: 0.7rem 1.3rem;
  transition: background-color 0.3s ease-out;
}

a:hover,
a:active {
  background-color: rgba(0, 160, 253, 0.616);
}
</style>
