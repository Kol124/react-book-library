import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [],
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

export const getBookName = (state) => state.books.name;
export const getBookAuthor = (state) => state.books.author;

export default booksSlice.reducer;
