<template>
  <base-dialog :show="!!error" title="Error" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Authenticating...">
    Loading...
  </base-dialog>
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
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      if (
        !this.userId.isEmpty &&
        !this.userId.isValid &&
        !this.password.isEmpty
      ) {
        this.isLoading = true;

        try {
          await this.$store.dispatch("auth/login", {
            email: this.userId.val,
            password: this.password.val,
          });
        } catch (err) {
          this.error = err.message;
        }

        this.isLoading = false;
      }
    },
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
    closeDialog() {
      this.error = null;
    },
  },
};
</script>
