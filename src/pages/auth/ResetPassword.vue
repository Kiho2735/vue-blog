<template>
  <div class="form-wrapper">
    <div class="title">
      <h1>Calm</h1>
    </div>

    <form @submit.prevent="login" class="form-wrapper__login">
      <div class="form-wrapper__title">
        <h2>Reset Password</h2>
      </div>

      <div class="form-control">
        <font-awesome-icon :icon="['fa', 'envelope']" class="icon" />
        <input
          type="email"
          id="id"
          v-model.trim="email.val"
          @blur="validateEmail"
          placeholder="Email"
          :class="redBorderColor"
        />
        <p v-if="email.isEmpty">Please enter email.</p>
        <p v-else-if="email.isValid">Please enter valid email.</p>
      </div>

      <p class="form-wrapper__login-register">
        Are you new?
        <router-link :to="{ name: 'Register' }">Register</router-link>
      </p>
      <button class="submit-btn">Reset</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: {
        val: "",
        isEmpty: false,
        isValid: false,
      },
    };
  },
  computed: {
    redBorderColor() {
      return { redBorder: this.email.isEmpty || this.email.isValid };
    },
  },
  methods: {
    validateEmail() {
      if (this.email.val == "") {
        this.email.isEmpty = true;
        this.email.isValid = false;
      } else if (!this.email.val.includes("@")) {
        this.email.isEmpty = false;
        this.email.isValid = true;
      } else {
        this.email.isEmpty = false;
        this.email.isValid = false;
      }
    },
  },
};
</script>

<style></style>
