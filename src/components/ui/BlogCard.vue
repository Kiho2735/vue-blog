<template>
  <div class="blog-card">
    <div class="action-icons">
      <div class="action-icon">
        <font-awesome-icon :icon="['fa', 'pen-to-square']" />
      </div>
      <div class="action-icon">
        <font-awesome-icon :icon="['fa', 'trash']" />
      </div>
    </div>
    <div class="preview-image">
      <img :src="require(`../../assets/${previewImage}.jpg`)" alt="" />
    </div>
    <div class="info">
      <p class="info__title">{{ title }}</p>
      <p class="info__date">Posted on: {{ date }}</p>
    </div>
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
