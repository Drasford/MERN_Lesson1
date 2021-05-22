import React from "react";
import { useSelector } from "react-redux";
import { getAllPostsSelector } from "../../selectors/";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector(getAllPostsSelector);
  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
