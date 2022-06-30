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
          :class="redBorderColorFirstName"
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
          :class="redBorderColorLastName"
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
          placeholder="Email"
          :class="redBorderColorId"
        />
        <p v-if="userId.isEmpty">Please enter email.</p>
        <p v-else-if="userId.isValid">Please enter valid email.</p>
      </div>

      <div class="form-control">
        <font-awesome-icon :icon="['fa', 'lock']" class="icon" />
        <input
          type="password"
          id="password"
          v-model.trim="password.val"
          @blur="validatePassword"
          placeholder="Password"
          :class="redBorderColorPassword"
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
          :class="redBorderColorConfirmPassword"
        />
        <p v-if="confirmPassword.isValid">Please enter the same password.</p>
      </div>

      <p class="form-wrapper__login-register">
        Already have an account?
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </p>
      <button class="submit-btn">Sign Up</button>
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
        isValid: false,
      },
      password: {
        val: "",
        isEmpty: false,
      },
      confirmPassword: {
        val: "",
        isValid: false,
      },
    };
  },
  computed: {
    redBorderColorFirstName() {
      return { redBorder: this.firstName.isEmpty };
    },
    redBorderColorLastName() {
      return { redBorder: this.lastName.isEmpty };
    },
    redBorderColorId() {
      return { redBorder: this.userId.isEmpty || this.userId.isValid };
    },
    redBorderColorPassword() {
      return { redBorder: this.password.isEmpty };
    },
    redBorderColorConfirmPassword() {
      return { redBorder: this.confirmPassword.isValid };
    },
  },
  methods: {
    validateFirstName() {
      if (this.firstName.val == "") {
        this.firstName.isEmpty = true;
      } else {
        this.firstName.isEmpty = false;
      }
    },
    validateLastName() {
      if (this.lastName.val == "") {
        this.lastName.isEmpty = true;
      } else {
        this.lastName.isEmpty = false;
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
    validateConfirmPassword() {
      if (this.confirmPassword.val == this.password.val) {
        this.confirmPassword.isValid = true;
      } else {
        this.confirmPassword.isValid = false;
      }
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
