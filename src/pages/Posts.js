import { React } from "react";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

// import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles({
//   btn: {
//     color: "orange",
//     fontSize: 30,
//     "&:hover": {
//       color: "white",
//     },
//   },
// });
// const classes = useStyles();

export default function Posts(props) {
  const posts = useSelector((state) => state.posts);

  return (
    <Container sx={{ my: 7 }}>
      {/* <Typography
        variant="h3"
        color="textSecondary"
        sx={{ textAlign: "center" }}
        gutterBottom
      >
        Posts
      </Typography> */}

      <Grid container spacing={6}>
        {posts.map((postItem) => (
          <Grid item sm={6} key={postItem.id}>
            <PostCard
              postId={postItem.id}
              postTitle={postItem.title}
              postImg={postItem.img}
              postDesc={postItem.desc}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
