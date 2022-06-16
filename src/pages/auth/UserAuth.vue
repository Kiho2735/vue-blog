<template>
  <form @submit.prevent="login">
    <div class="form-control">
      <label for="id">Email</label>
      <input
        type="email"
        id="id"
        v-model.trim="userId.val"
        @blur="validateId"
      />
      <p v-if="userId.isEmpty">Please enter email.</p>
      <p v-else-if="userId.isValid">Please enter valid email.</p>
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model.trim="password.val"
        @blur="validatePassword"
      />
      <p v-if="password.isEmpty">Please enter password.</p>
    </div>
    <button>Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userId: {
        val: "",
        isEmpty: false,
        isValid: false,
      },
      password: {
        val: "",
        isEmpty: false,
      },
    };
  },
  methods: {
    login() {},
    validateId() {
      if (this.userId.val == "") {
        this.userId.isEmpty = true;
        this.userId.isValid = false;
      } else if (!this.userId.val.includes("@")) {
        this.userId.isEmpty = false;
        this.userId.isValid = true;
      } else {
        this.userId.isEmpty = false;
        this.userId.isValid = false;
      }
    },
    validatePassword() {
      if (this.password.val == "") {
        this.password.isEmpty = true;
      } else {
        this.password.isEmpty = false;
      }
    },
  },
};
</script>
