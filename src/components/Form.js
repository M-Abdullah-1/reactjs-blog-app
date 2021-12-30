import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../store/index";
import { useHistory } from "react-router-dom";
import {
  TextField,
  FormControl,
  Button,
  Typography,
  Card,
  Switch,
  FormGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";

function Form(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOneTime, setIsOneTime] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImgUrl, setEnteredImgUrl] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const imgUrlHandler = (event) => {
    setEnteredImgUrl(event.target.value);
  };
  const descHandler = (event) => {
    setEnteredDesc(event.target.value);
  };
  const switchHandler = (event) => {
    setIsOneTime(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const post = {
      id: "id" + new Date().getTime(),
      title: enteredTitle,
      img: enteredImgUrl,
      desc: enteredDesc,
    };
    console.log(post);
    dispatch(postActions.add(post));
    setEnteredTitle("");
    setEnteredImgUrl("");
    setEnteredDesc("");

    if (isOneTime) {
      history.replace("/posts");
    }
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
          <FormControl fullWidth>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={isOneTime} onChange={switchHandler} />
                }
                label="Add One Post ?"
              />
            </FormGroup>
          </FormControl>
          <FormControl sx={{ my: 2 }}>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </FormControl>
        </form>
      </Card>
    </Paper>
  );
}

export default Form;
