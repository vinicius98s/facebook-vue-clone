<template>
  <div class="post">
    <div class="user-info">
      <img :src="post.author.avatar" :alt="post.author.name" />
      <div>
        <p>{{ post.author.name }}</p>
        <span>{{ post.date }}</span>
      </div>
    </div>
    <p>{{ post.body }}</p>
    <ul v-if="post.comments">
      <div class="separator" />
      <Comment v-for="comment in post.comments" :key="comment.id" :comment="comment" />
    </ul>
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  props: ["post"],
  components: {
    Comment
  }
};
</script>

<style lang="scss">
.post {
  background: $white;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
  padding: 20px;

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      border-radius: 50%;
      margin-right: 15px;
    }

    div {
      display: flex;
      flex-direction: column;

      p {
        font-size: 16px;
        font-weight: bold;
      }

      span {
        color: #9a9a9a;
        font-size: 13px;
        margin-top: 3px;
      }
    }
  }

  & > p {
    margin: 30px 0 15px;
  }

  ul .separator {
    width: 100%;
    height: 1px;
    background: $grey;
    margin-bottom: 20px;
  }
}
</style>