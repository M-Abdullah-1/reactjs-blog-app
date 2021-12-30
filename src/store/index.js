import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPostsState = {
  posts: [
    {
      id: "id1640283180285",
      title: "Making things good",
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      img: "https://pixabay.com/get/g14bc600dc7cfc564f88ec55136a1d7f2af006a89c0d00f47efb633bd0c1506ed404b26e93ec2d98042051738da7a7b53.jpg",
    },
    {
      id: "id1640283182790",
      title: "Beautiful sunset",
      desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      img: "https://pixabay.com/get/gc50eb8d36897a92946e5cf6d1f2917e2a46c25d7fd5ab36c1db41a201b7cd150387bbcd732ae88ab57cdb76c0ede90bc82c695338fabb000a64b1ab3171f043f_1920.jpg",
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    add(state, action) {
      state.posts.push(action.payload);
    },
    updateOne(state, action) {
      const editPostId = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts[editPostId] = action.payload;
      console.log(state.posts);
    },
    deleteOne(state, action) {
      const editPostId = state.posts.findIndex(
        (post) => post.id === action.payload
      );
      state.posts.splice(editPostId, 1);
    },
  },
});

const store = configureStore({
  reducer: postSlice.reducer,
});

export default store;

export const postActions = postSlice.actions;
