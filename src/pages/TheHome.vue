<template>
  <div class="container">
    <div class="welcome">
      <div class="welcome__msg">
        <div class="welcome__content">
          <h2 class="welcome__title">WELCOME!</h2>
          <p class="welcome__introduce">
            This is a personal blog. You can explore many interesting types of
            blog posts. If you want to share your journey, please sign up now!
          </p>
          <router-link to="#" class="welcome__link"
            >EXPLORE BLOGS <font-awesome-icon :icon="['fa', 'arrow-right']"
          /></router-link>
        </div>
      </div>
      <div class="welcome__img">
        <img src="../assets/welcomeImage.jpg" alt="welcomeImage" />
      </div>
    </div>
    <div class="recent__blog">
      <blog-list :blogList="blogList"> Recent Blogs </blog-list>
    </div>
    <div class="register__section">
      <div class="container">
        <h2>Register now and Share your story!</h2>
        <router-link to="#"
          >Register Now <font-awesome-icon :icon="['fa', 'arrow-right']"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from "../components/blog/BlogList.vue";

export default {
  components: {
    BlogList,
  },
  data() {
    return {
      blogList: [
        {
          title: "First Blog",
          previewImage: "preview1",
          date: new Date().toLocaleDateString(),
        },
        {
          title: "Second Blog",
          previewImage: "preview2",
          date: new Date().toLocaleDateString(),
        },
        {
          title: "Third Blog",
          previewImage: "preview3",
          date: new Date().toLocaleDateString(),
        },
        {
          title: "Fourth Blog",
          previewImage: "preview4",
          date: new Date().toLocaleDateString(),
        },
      ],
    };
  },
};
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

.register__section {
  .container {
    text-transform: uppercase;
    width: 80vw;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    max-width: 400px;
    margin-bottom: 2rem;
    text-align: center;
  }

  a {
    text-align: center;
    color: #fff;
    padding: 0.5rem;
    width: 200px;
    background-color: #000;
    border-radius: 15px;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgb(93, 93, 93);
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
    justify-content: center;
    width: 100vw;
    height: 600px;

    &__msg {
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 5rem;
      flex: 1;
    }

    &__img {
      order: 2;
      flex: 1.5;
      max-height: none;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  .register__section {
    .container {
      flex-direction: row;
      padding: 5rem 0;
      justify-content: space-between;
    }

    h2 {
      font-size: 2rem;
      text-align: initial;
      margin-bottom: 0;
      max-width: 300px;
    }

    a {
      padding: 0.6rem;
      width: 150px;
      font-size: 1.2rem;
    }
  }
}

@media (min-width: 950px) {
  .welcome__msg {
    padding-left: 10%;
  }

  .register__section {
    .container {
      padding: 10rem 0;
    }

    h2 {
      font-size: 3rem;
      max-width: 500px;
    }

    a {
      width: 200px;
      font-size: 1.5rem;
    }
  }
}
</style>
