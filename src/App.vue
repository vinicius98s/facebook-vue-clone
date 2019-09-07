<template>
  <div>
    <Header />
    <div class="container">
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { format, parseISO } from "date-fns";

import Header from "./components/Header.vue";
import PostList from "./components/PostsList.vue";
import {
  getUsers,
  getPosts,
  capitalizeFirstLetter,
  getComments,
  formatPosts
} from "./utils";

export default {
  components: {
    Header,
    PostList
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const users = await getUsers();
      const posts = await getPosts();
      const comments = await getComments();

      this.posts = posts.map((post, index) =>
        formatPosts(post, index, users, comments)
      );
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
}

html,
body,
#root {
  min-height: 100%;
}

body {
  background: $light-grey;
}

.container {
  max-width: 700px;
  margin: 15px auto;
  color: $text-color;
}
</style>