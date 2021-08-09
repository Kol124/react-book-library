import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: 0,
    books: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addBook: (state, action) => {
      state.books.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        completed: false,
      });
      console.log("--> ", state);
    },
  },
});

export const { increment, decrement, addBook } = librarySlice.actions;

export const selectCount = (state) => state.library.value;
export const selectBooks = (state) => state.library.books;

export default librarySlice.reducer;
