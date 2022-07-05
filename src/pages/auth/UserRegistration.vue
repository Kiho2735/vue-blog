<template>
  <div class="form-wrapper">
    <div class="title">
      <h1>Calm</h1>
    </div>

    <form @submit.prevent="login" class="form-wrapper__login">
      <div class="form-wrapper__title">
        <h2>Sign Up</h2>
      </div>

      <div class="form-control">
        <font-awesome-icon :icon="['fa', 'user']" class="icon" />
        <input
          type="text"
          v-model.trim="firstName.val"
          @blur="validateFirstName"
          placeholder="First Name"
          :class="warningFirstName"
        />
        <p v-if="firstName.isEmpty">Please enter first name.</p>
      </div>

      <div class="form-control">
        <font-awesome-icon :icon="['fa', 'user']" class="icon" />
        <input
          type="text"
          v-model.trim="lastName.val"
          @blur="validateLastName"
          placeholder="Last Name"
          :class="warningLastName"
        />
        <p v-if="lastName.isEmpty">Please enter last name.</p>
      </div>

      <div class="form-control">
        <font-awesome-icon :icon="['fa', 'envelope']" class="icon" />
        <input
          type="email"
          id="id"
          v-model.trim="userId.val"
          @blur="validateId"
          placeholder="Email (Username)"
          :class="warningId"
        />
        <p v-if="userId.isEmpty">Please enter email.</p>
        <p v-else-if="userId.isInvalid">Please enter valid email.</p>
      </div>

      <div class="form-control">
        <font-awesome-icon :icon="['fa', 'lock']" class="icon" />
        <input
          type="password"
          id="password"
          v-model.trim="password.val"
          @blur="validatePassword"
          placeholder="Password"
          :class="warningPassword"
        />
        <p v-if="password.isEmpty">Please enter password.</p>
      </div>

      <div class="form-control">
        <font-awesome-icon :icon="['fa', 'lock']" class="icon" />
        <input
          type="password"
          id="confirmPassword"
          v-model.trim="confirmPassword.val"
          @blur="validateConfirmPassword"
          placeholder="Confirm Password"
          :class="warningConfirmPassword"
        />
        <p v-if="confirmPassword.isInvalid">Please enter the same password.</p>
      </div>

      <p class="form-wrapper__login-register">
        Already have an account?
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </p>
      <button class="submit-btn" @click.prevent="register">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        val: "",
        isEmpty: false,
      },
      lastName: {
        val: "",
        isEmpty: false,
      },
      userId: {
        val: "",
        isEmpty: false,
        isInvalid: false,
      },
      password: {
        val: "",
        isEmpty: false,
      },
      confirmPassword: {
        val: "",
        isInvalid: false,
      },
    };
  },
  computed: {
    warningFirstName() {
      return { redBorder: this.firstName.isEmpty };
    },
    warningLastName() {
      return { redBorder: this.lastName.isEmpty };
    },
    warningId() {
      return { redBorder: this.userId.isEmpty || this.userId.isInvalid };
    },
    warningPassword() {
      return { redBorder: this.password.isEmpty };
    },
    warningConfirmPassword() {
      return { redBorder: this.confirmPassword.isInvalid };
    },
  },
  methods: {
    validateFirstName() {
      if (this.firstName.val == "") {
        this.firstName.isEmpty = true;
        return false;
      } else {
        this.firstName.isEmpty = false;
        return true;
      }
    },
    validateLastName() {
      if (this.lastName.val == "") {
        this.lastName.isEmpty = true;
        return false;
      } else {
        this.lastName.isEmpty = false;
        return true;
      }
    },
    validateId() {
      if (this.userId.val == "") {
        this.userId.isEmpty = true;
        this.userId.isInvalid = false;
        return false;
      } else if (!this.userId.val.includes("@")) {
        this.userId.isEmpty = false;
        this.userId.isInvalid = true;
        return false;
      } else {
        this.userId.isEmpty = false;
        this.userId.isInvalid = false;
        return true;
      }
    },
    validatePassword() {
      if (this.password.val == "") {
        this.password.isEmpty = true;
        return false;
      } else {
        this.password.isEmpty = false;
        return true;
      }
    },
    validateConfirmPassword() {
      if (this.confirmPassword.val == this.password.val) {
        this.confirmPassword.isInvalid = true;
        return false;
      } else {
        this.confirmPassword.isInvalid = false;
        return true;
      }
    },
    async register() {
      await this.$store
        .dispatch(
          "auth/signup",
          { email: this.userId.val, password: this.password.val },
          { root: true }
        )
        .then()
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  min-height: 100vh;
  height: auto;

  &__login {
    margin-bottom: 2rem;
  }
}
</style>
