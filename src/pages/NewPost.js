import React from "react";
import { Container, Box } from "@mui/material";
import Form from "../components/Form";
import { Fragment } from "react";

function NewPost() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Box sx={{ m: 4 }}>
          <Form />
        </Box>
      </Container>
    </Fragment>
  );
}

export default NewPost;
