<template>
  <div class="blog-card">
    <router-link to="#">
      <div class="action-icons">
        <div class="action-icon action-icon__edit">
          <font-awesome-icon :icon="['fa', 'pen-to-square']" />
        </div>
        <div class="action-icon action-icon__delete">
          <font-awesome-icon :icon="['fa', 'trash']" />
        </div>
      </div>
      <div class="favorite-icon">
        <font-awesome-icon :icon="['fa', 'star']" />
      </div>
      <div class="preview-image">
        <img :src="require(`../../assets/${previewImage}.jpg`)" alt="" />
      </div>
      <div class="info">
        <p class="info__title">{{ title }}</p>
        <p class="info__date">Posted on: {{ date }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["title", "previewImage", "date"],
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  font-size: 1.3rem;
  font-weight: 300;
  max-width: 400px;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

@media (min-width: 700px) {
  .blog-card {
    max-width: 275px;
  }
}

@media (min-width: 800px) {
  .blog-card {
    max-width: 300px;
  }
}

@media (min-width: 900px) {
  .blog-card {
    max-width: 350px;
  }
}

@media (min-width: 1000px) {
  .blog-card {
    max-width: 275px;
  }
}

@media (min-width: 1600px) {
  .blog-card {
    max-width: 350px;
  }
}

.action-icons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
}

.action-icon {
  background-color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-right: 0.3rem;
  }

  &__edit {
    transition: all 0.3s ease;

    &:hover {
      background-color: rgb(0, 160, 253);
      color: #fff;
    }
  }

  &__delete {
    transition: all 0.3s ease;

    &:hover {
      background-color: #f73b3b;
      color: #fff;
    }
  }
}

.preview-image {
  overflow: hidden;
  width: 100%;
  height: 300px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.favorite-icon {
  background-color: #fff;
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 120px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1;
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #faf31d;
    color: #fff;
  }
}

.info {
  position: relative;
  padding: 1rem 1rem 4rem;
  background-color: #fff;

  &__title {
    font-size: 1.4rem;
  }

  &__date {
    font-size: 1rem;
    color: rgb(170, 170, 170);
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
