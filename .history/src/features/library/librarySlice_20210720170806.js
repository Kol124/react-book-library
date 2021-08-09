import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        id: action.payload.id,
        title: action.payload.volumeInfo.title,
        authors: action.payload.volumeInfo.authors,
        link: action.payload.volumeInfo.previewLink,
        image: action.payload.volumeInfo.smallThumbnail,
        completed: false,
      });
    },

    removeBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload.id);
    },

    completeBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[index].completed = !state.books[index].completed;
    },
  },
});

export const { addBook, completeBook, removeBook } = librarySlice.actions;

export const selectBooks = (state) => state.library.books;

export default librarySlice.reducer;
