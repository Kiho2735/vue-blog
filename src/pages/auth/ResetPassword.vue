<template>
  <div>
    <base-loading v-show="isLoading"></base-loading>

    <base-dialog
      :show="isSucceed"
      :isSucceed="true"
      btnName="Login"
      title="Confirmed!"
      @close="goToLogin"
    >
      Please check your email inbox.
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

      <form class="form-wrapper__login">
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
          <p v-else-if="email.isInvalid">Please enter valid email.</p>
        </div>

        <p class="form-wrapper__login-register">
          Are you new?
          <router-link :to="{ name: 'Register' }">Register</router-link>
        </p>
        <button class="submit-btn" @click.prevent="reset">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: {
        val: "",
        isEmpty: false,
        isInvalid: false,
      },
      isLoading: false,
      isSucceed: false,
      error: null,
    };
  },
  computed: {
    redBorderColor() {
      return { redBorder: this.email.isEmpty || this.email.isInvalid };
    },
  },
  methods: {
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
    async reset() {
      this.isLoading = true;

      if (this.validateEmail()) {
        try {
          await this.$store.dispatch("auth/reset", {
            email: this.email.val,
          });

          this.isSucceed = true;
        } catch (err) {
          this.error = err.message;
        }
      } else {
        this.validateEmail();
        this.error = "Please enter valid values.";
      }

      this.isLoading = false;
    },
    goToLogin() {
      this.$router.replace("/login");
      this.isSucceed = false;
    },
    closeModal() {
      this.error = null;
    },
  },
};
</script>

<style></style>
