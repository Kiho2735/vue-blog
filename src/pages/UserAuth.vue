<template>
  <base-dialog :show="!!error" title="Error" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Authenticating...">
    Loading...
  </base-dialog>
  <div class="form-wrapper">
    <div class="form-wrapper__container">
      <div class="form-wrapper__title">
        <h1>Calm</h1>
      </div>

      <form @submit.prevent="login" class="form-wrapper__login">
        <div class="form-control">
          <font-awesome-icon :icon="['fa', 'user']" class="icon" />
          <input
            type="email"
            id="id"
            v-model.trim="userId.val"
            @blur="validateId"
            placeholder="Email"
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
          />
          <p v-if="password.isEmpty">Please enter password.</p>
        </div>
        <p class="form-wrapper__register">
          Forgot your <router-link to="#">username</router-link> or
          <router-link to="#">password</router-link>? |
          <router-link to="#">Register</router-link>
        </p>
        <button class="submit">Sign In</button>
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

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__container {
    border: 1px solid rgb(190, 190, 190);
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 3rem;
  }

  &__title {
    padding: 0 1rem;
    position: absolute;
    top: -40px;
    background-color: #fff;
  }

  .form-control {
    position: relative;
    margin-bottom: 1rem;
    width: 350px;

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
      margin-top: 0.5rem;
      font-size: 1rem;
      color: rgb(253, 60, 60);
    }
  }

  &__register {
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

  .submit {
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
