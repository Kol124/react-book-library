import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "library",
  initialState: {
    books: [],
  },
  reducer: {
    addBook: (books, action) => {
      books.push({
        id: action.payload.id,
        name: action.payload.name,
        author: action.payload.author,
        completed: false,
      });
    },

    removeBook: (books, action) => {
      books.filter((book) => book.id !== action.payload.id);
    },

    completeBook: (books, action) => {
      const index = books.findIndex((book) => book.id === action.payload.id);
      books[index].completed = !books[index].completed;
    },
  },
});

export const { addBook, removeBook, completeBook } = booksSlice.actions;
export const selectBook = (state) => state.library.books;

export default booksSlice.reducer;
