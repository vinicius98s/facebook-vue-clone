<template>
  <li>
    <img :src="comment.author.avatar" :alt="comment.author.name" />
    <div class="content">
      <span>{{ comment.author.name }}</span>
      {{ comment.content }}
    </div>
  </li>
</template>

<script>
export default {
  props: ["comment"]
};
</script>

<style lang="scss">
li {
  list-style: none;
  display: flex;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .content {
    background: $light-grey;
    border-radius: 20px;
    padding: 15px;
    margin-left: 10px;
    margin-bottom: 15px;

    span {
      font-weight: bold;
    }
  }
}
</style>