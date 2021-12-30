import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/index";
import { useParams, useHistory } from "react-router-dom";
import {
  TextField,
  FormControl,
  Button,
  Typography,
  Card,
  Paper,
} from "@mui/material";

function EditForm(props) {
  const params = useParams();
  const history = useHistory();
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [editPostId, setEditPostId] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImgUrl, setEnteredImgUrl] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");

  useEffect(() => {
    const editPostIndex = posts.findIndex((post) => post.id === params.postId);

    setEditPostId(posts[editPostIndex].id);
    setEnteredTitle(posts[editPostIndex].title);
    setEnteredImgUrl(posts[editPostIndex].img);
    setEnteredDesc(posts[editPostIndex].desc);
  }, [posts, params.postId]);

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const imgUrlHandler = (event) => {
    setEnteredImgUrl(event.target.value);
  };
  const descHandler = (event) => {
    setEnteredDesc(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const updatedPost = {
      id: editPostId,
      title: enteredTitle,
      img: enteredImgUrl,
      desc: enteredDesc,
    };
    dispatch(postActions.updateOne(updatedPost));
    setEnteredTitle("");
    setEnteredImgUrl("");
    setEnteredDesc("");
    history.replace("/posts");
  };

  return (
    <Paper sx={{ minWidth: 250, maxWidth: 500 }} elevation={10}>
      <Card sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom color="textSecondary">
          Create New Post
        </Typography>
        <form onSubmit={submitHandler}>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Title.."
              variant="outlined"
              margin="normal"
              value={enteredTitle}
              onChange={titleHandler}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Img Url.."
              variant="outlined"
              margin="normal"
              value={enteredImgUrl}
              onChange={imgUrlHandler}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Desc.."
              variant="outlined"
              margin="normal"
              multiline
              rows={3}
              value={enteredDesc}
              onChange={descHandler}
            />
          </FormControl>
          <FormControl sx={{ my: 2 }}>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </FormControl>
        </form>
      </Card>
    </Paper>
  );
}

export default EditForm;
