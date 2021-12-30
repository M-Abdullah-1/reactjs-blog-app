import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const useStyles = makeStyles({
  postImage: {
    maxWidth: "100%",
    height: "auto",
  },
});

function PostDetail() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  const params = useParams();
  const post = posts.find((post) => post.id === params.postId);
  console.log(post);
  return (
    <Fragment>
      <Container>
        <Box sx={{ my: 3 }}>
          <Card>
            <CardMedia
              className={classes.postImage}
              component="img"
              alt="green iguana"
              height="340"
              image={post.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {post.desc}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Fragment>
  );
}

export default PostDetail;
