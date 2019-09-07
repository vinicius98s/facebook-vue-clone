<template>
  <ul>
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<script>
import Post from "./Post.vue";

export default {
  components: {
    Post
  },
  props: ["posts"]
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
