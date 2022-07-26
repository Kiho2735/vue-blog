<template>
  <div class="login-container">
    <base-loading v-show="isLoading"></base-loading>

    <base-dialog
      :show="isSucceed"
      :isSucceed="true"
      btnName="Home"
      title="Confirmed!"
      @close="goToHome"
    >
      Nice to meet you, {{ firstName.val }}!
    </base-dialog>
    <base-dialog
      :show="!!error"
      :isSucceed="false"
      btnName="Close"
      title="Fail"
      @close="closeModal"
    >
      {{ error }}
    </base-dialog>

    <div class="form-wrapper">
      <form @submit.prevent="login" class="form-wrapper__login">
        <div class="form-wrapper__title">
          <h1>Hello!</h1>
          <p>Please enter details.</p>
        </div>

        <div class="form-control">
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            v-model.trim="firstName.val"
            @blur="validateFirstName"
            placeholder="Please enter your first name."
            :class="warningFirstName"
          />
          <p v-if="firstName.isEmpty">Please enter first name.</p>
        </div>

        <div class="form-control">
          <label for="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            v-model.trim="lastName.val"
            @blur="validateLastName"
            placeholder="Please enter your last name."
            :class="warningLastName"
          />
          <p v-if="lastName.isEmpty">Please enter last name.</p>
        </div>

        <div class="form-control">
          <label for="id">Email Address</label>
          <input
            type="email"
            id="id"
            v-model.trim="email.val"
            @blur="validateEmail"
            placeholder="Please enter your email address."
            :class="warningEmail"
          />
          <p v-if="email.isEmpty">Please enter email.</p>
          <p v-else-if="email.isInvalid">Please enter valid email.</p>
        </div>

        <div class="form-control">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            v-model.trim="username.val"
            @blur="validateUsername"
            placeholder="Please enter your username."
            :class="warningUsername"
          />
          <p v-if="username.isEmpty">Please enter username.</p>
        </div>

        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password.val"
            @blur="validatePassword"
            placeholder="Please enter your password."
            :class="warningPassword"
          />
          <p v-if="password.isEmpty">Please enter password.</p>
          <p v-else-if="password.isShort">
            Please enter at least 6 numbers/characters long.
          </p>
        </div>

        <div class="form-control">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model.trim="confirmPassword.val"
            @blur="validateConfirmPassword"
            placeholder="Please re-enter your password."
            :class="warningConfirmPassword"
          />
          <p v-if="confirmPassword.isInvalid">
            Please enter the same password.
          </p>
        </div>

        <p class="form-wrapper__login-register">
          Already have an account?
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </p>
        <button class="submit-btn" @click.prevent="register">Sign Up</button>
      </form>
    </div>
    <div class="background"></div>
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
      email: {
        val: "",
        isEmpty: false,
        isInvalid: false,
      },
      username: {
        val: "",
        isEmpty: false,
      },
      password: {
        val: "",
        isEmpty: false,
        isShort: false,
      },
      confirmPassword: {
        val: "",
        isInvalid: false,
      },
      isLoading: false,
      isSucceed: false,
      error: null,
    };
  },
  computed: {
    warningFirstName() {
      return { redBorder: this.firstName.isEmpty };
    },
    warningLastName() {
      return { redBorder: this.lastName.isEmpty };
    },
    warningEmail() {
      return { redBorder: this.email.isEmpty || this.email.isInvalid };
    },
    warningUsername() {
      return { redBorder: this.username.isEmpty };
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
    validateEmail() {
      if (this.email.val == "") {
        this.email.isEmpty = true;
        this.email.isInvalid = false;
        return false;
      } else if (!this.email.val.includes("@")) {
        this.email.isEmpty = false;
        this.email.isInvalid = true;
        return false;
      } else {
        this.email.isEmpty = false;
        this.email.isInvalid = false;
        return true;
      }
    },
    validateUsername() {
      if (this.username.val == "") {
        this.username.isEmpty = true;
        return false;
      } else {
        this.username.isEmpty = false;
        return true;
      }
    },
    validatePassword() {
      if (this.password.val == "") {
        this.password.isEmpty = true;
        this.password.isShort = false;
        return false;
      } else if (this.password.val.length < 6) {
        this.password.isShort = true;
        this.password.isEmpty = false;
        return false;
      } else if (this.confirmPassword.val == this.password.val) {
        return this.validateConfirmPassword();
      } else {
        this.password.isShort = false;
        this.password.isEmpty = false;
        return true;
      }
    },
    validateConfirmPassword() {
      if (
        this.confirmPassword.val != this.password.val ||
        this.confirmPassword.val == ""
      ) {
        this.confirmPassword.isInvalid = true;
        return false;
      } else {
        this.confirmPassword.isInvalid = false;
        return true;
      }
    },
    async register() {
      this.isLoading = true;

      if (
        this.validateFirstName() &&
        this.validateLastName() &&
        this.validateEmail() &&
        this.validateUsername() &&
        this.validatePassword() &&
        this.validateConfirmPassword()
      ) {
        try {
          await this.$store.dispatch("auth/signup", {
            email: this.email.val,
            password: this.password.val,
            firstName: this.firstName.val,
            lastName: this.lastName.val,
            username: this.username.val,
          });

          await this.$store.dispatch("auth/addUser", {
            email: this.email.val,
            username: this.username.val,
            firstName: this.firstName.val,
            lastName: this.lastName.val,
          });

          this.isSucceed = true;
        } catch (e) {
          this.error = e.message;
        }
      } else {
        this.validateFirstName();
        this.validateLastName();
        this.validateEmail();
        this.validateUsername();
        this.validatePassword();
        this.validateConfirmPassword();
        this.error = "Please enter valid values.";
      }

      this.isLoading = false;
    },
    goToHome() {
      this.$router.replace("/");
      this.isSucceed = false;
    },
    closeModal() {
      this.error = null;
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
