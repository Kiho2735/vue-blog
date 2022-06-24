<template>
  <div class="container">
    <div class="welcome">
      <div class="welcome__msg">
        <h2 class="welcome__title">WELCOME</h2>
        <p class="welcome__introduce">
          This is a personal blog. You can explore many interesting types of
          blog posts.
        </p>
        <router-link to="#" class="welcome__link"
          >EXPLORE BLOGS <font-awesome-icon :icon="['fa', 'arrow-right']"
        /></router-link>
      </div>
      <div class="welcome__img">
        <img src="../../assets/welcomeImage.jpg" alt="welcomeImage" />
      </div>
    </div>
    <div class="recent__blog"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  background-color: rgb(107, 107, 107);

  &__msg {
    order: 2;
    font-size: 1.5rem;
    padding: 3rem;
    color: #fff;

    a {
      color: #fff;
      font-size: 1.3rem;
      transition: color 0.3s ease;

      &:hover {
        color: rgb(0, 160, 253);
      }
    }
  }

  &__title {
    margin-bottom: 1rem;
  }

  &__introduce {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  &__link {
    border-bottom: 1px dashed;
  }

  &__img {
    order: 1;

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
}

@media (min-width: 440px) {
  .welcome {
    &__msg {
      padding: 4rem 7rem;
    }
  }
}

@media (min-width: 560px) {
  .welcome {
    &__img {
      overflow: hidden;
      max-height: 400px;
    }
  }
}

@media (min-width: 700px) {
  .welcome {
    flex-direction: row;

    &__msg {
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 4rem;
      width: 50vw;
    }

    &__img {
      order: 2;

      img {
        max-width: 600px;
      }
    }
  }
}
</style>
