import React, { useEffect } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import Form from "./../Form/Form";
import Posts from "./../Posts/Posts";
import useStyles from "./styles";

import { getIdToUpdateSelector } from "../../selectors";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const idToUpdate = useSelector(getIdToUpdateSelector);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, idToUpdate]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          className={classes.mainContainer}
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
