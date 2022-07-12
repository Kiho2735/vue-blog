<template>
  <teleport to="body">
    <div @click="close" class="backdrop" v-if="show"></div>
    <transition name="dialog">
      <dialog open v-if="show" class="modal">
        <header class="title" :class="succeed">
          <div class="icon">
            <font-awesome-icon
              v-if="isSucceed"
              :icon="['far', 'circle-check']"
              class="fa-2xl"
            />
            <font-awesome-icon
              v-else
              :icon="['far', 'circle-xmark']"
              class="fa-2xl"
            />
          </div>

          <h2>{{ title }}</h2>
        </header>

        <section class="description">
          <slot></slot>
        </section>

        <menu>
          <button @click="close">{{ btnName }}</button>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isSucceed: {
      type: Boolean,
      required: true,
    },
    btnName: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
  computed: {
    succeed() {
      return this.isSucceed ? "success" : "failure";
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(58, 58, 58, 0.7);
  z-index: 10;
}

.modal {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  padding: 2rem;
  border: none;
  border-radius: 15px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    h2 {
      margin: 1rem;
    }
  }

  .success {
    color: rgb(66, 186, 150);
  }

  .failure {
    color: #a82e2e;
  }

  .description {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: rgb(112, 112, 112);
  }

  menu {
    display: flex;
    justify-content: end;

    button {
      border: none;
      color: #fff;
      background-color: #000;
      border-radius: 10px;
      width: 25%;
      font-size: 1.2rem;
      padding: 0.5rem;
    }
  }
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
