import axios from "axios";
import { format, parseISO } from "date-fns";

export const getUsers = async () => {
  const { data: users } = await axios.get("https://randomuser.me/api", {
    params: {
      nat: "br",
      page: 1,
      results: 20
    }
  });

  return users.results;
};

export const getPosts = async () => {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: 10,
        _page: 1
      }
    }
  );

  return posts;
};

export const getComments = async () => {
  const { data: comments } = await axios.get(
    "https://jsonplaceholder.typicode.com/comments",
    {
      params: {
        _limit: 10,
        _page: 1
      }
    }
  );

  return comments;
};

export const capitalizeFirstLetter = word =>
  `${word[0].toUpperCase()}${word.slice(1)}`;

export const formatPosts = (post, index, users, comments) => {
  const numOfComments = Math.floor(Math.random() * 10);

  const commentsUsers = users.slice(10, 20).slice(0, numOfComments);
  const slicedComments = comments.slice(0, numOfComments);
  const formatedComments = slicedComments.map((comment, index) => {
    const user = commentsUsers[index];

    return {
      id: comment.id,
      author: {
        name: `${capitalizeFirstLetter(
          user.name.first
        )} ${capitalizeFirstLetter(user.name.last)}`,
        avatar: user.picture.medium
      },
      content: capitalizeFirstLetter(comment.body)
    };
  });

  const currentUser = users[index];

  return {
    id: post.id,
    body: capitalizeFirstLetter(post.body),
    author: {
      name: `${capitalizeFirstLetter(
        currentUser.name.first
      )} ${capitalizeFirstLetter(currentUser.name.last)}`,
      avatar: currentUser.picture.medium
    },
    date: format(parseISO(currentUser.registered.date), "dd MMM yyyy"),
    comments: formatedComments
  };
};
