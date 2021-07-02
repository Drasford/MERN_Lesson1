import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { map } from "ramda";
import { getAllPostsSelector } from "../../selectors/";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector(getAllPostsSelector);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {map(
        (post) => (
          <Grid key={post._id}  item xs={12} sm={6}>
            <Post  post={post} />
          </Grid>
        ),
        posts
      )}
    </Grid>
  );
};

export default Posts;
