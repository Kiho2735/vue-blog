<template>
  <div>
    <base-loading v-show="isLoading"></base-loading>

    <base-dialog
      :show="isSucceed"
      :isSucceed="true"
      btnName="Home"
      title="Confirmed!"
      @close="goToHome"
    >
      Welcome!
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
      <div class="title">
        <h1>Calm</h1>
      </div>

      <form @submit.prevent="login" class="form-wrapper__login">
        <div class="form-wrapper__title">
          <h2>Sign In</h2>
        </div>

        <div class="form-control">
          <font-awesome-icon :icon="['fa', 'user']" class="icon" />
          <input
            type="email"
            id="id"
            v-model.trim="userId.val"
            @blur="validateId"
            placeholder="Email"
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
          <p v-else-if="password.isShort">
            Please enter at least 6 numbers/characters long.
          </p>
        </div>
        <p class="form-wrapper__login-register">
          Forgot your <router-link to="#">username</router-link> or
          <router-link :to="{ name: 'Reset Password' }">password</router-link>?
          |
          <router-link :to="{ name: 'Register' }">Register</router-link>
        </p>
        <button class="submit-btn">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: {
        val: "",
        isEmpty: false,
        isInvalid: false,
      },
      password: {
        val: "",
        isEmpty: false,
        isShort: false,
      },
      isLoading: false,
      isSucceed: false,
      error: null,
    };
  },
  computed: {
    warningId() {
      return { redBorder: this.userId.isEmpty || this.userId.isInvalid };
    },
    warningPassword() {
      return { redBorder: this.password.isEmpty };
    },
  },
  methods: {
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
        this.password.isShort = false;
        return false;
      } else if (this.password.val.length < 6) {
        this.password.isShort = true;
        this.password.isEmpty = false;
        return false;
      } else {
        this.password.isEmpty = false;
        this.password.isShort = false;
        return true;
      }
    },
    async login() {
      this.isLoading = true;

      if (this.validateId() && this.validatePassword()) {
        try {
          await this.$store.dispatch("auth/login", {
            email: this.userId.val,
            password: this.password.val,
          });

          this.isSucceed = true;
        } catch (err) {
          this.error = err.message;
        }
      } else {
        this.validateId();
        this.validatePassword();
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

<style lang="scss">
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__title {
    width: 100%;
    margin-bottom: 1rem;
  }

  &__login {
    border: 1px solid rgb(190, 190, 190);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 3rem 2rem 4rem;
  }

  .form-control {
    position: relative;
    margin-bottom: 1rem;
    width: 300px;

    @media (min-width: 700px) {
      width: 350px;
    }

    .redBorder {
      border: 1px solid red;
    }

    .icon {
      position: absolute;
      left: 10px;
      top: 13px;
    }

    input {
      padding: 0.8rem 2.5rem;
      font-size: 1rem;
      width: 100%;
      border-radius: 10px;
      border: 1px solid rgb(148, 148, 148);
    }

    p {
      margin-top: 0.2rem;
      font-size: 1rem;
      color: rgb(253, 60, 60);
    }
  }

  &__login-register {
    font-size: 1rem;
    text-align: center;
    color: rgb(161, 161, 161);

    a {
      text-decoration: underline;
      color: rgb(161, 161, 161);
      transition: all 0.3s ease;

      &:hover {
        color: #000;
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    font-size: 1.3rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: rgb(0, 160, 253);
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgb(62, 184, 255);
    }
  }
}
</style>
