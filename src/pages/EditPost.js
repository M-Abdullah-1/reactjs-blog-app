import React, { Fragment } from "react";
import { Container } from "@mui/material";
import EditForm from "../components/EditForm";

function EditPost() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <h1>Edit Post</h1>
        <EditForm />
      </Container>
    </Fragment>
  );
}

export default EditPost;
