import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [],
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
      const index = book.findIndex(book.id === action.payload.id);
      books[index].completed === !books[index].completed;
    },
  },
});

export const { addBook, removeBook, completeBook } = slice.actions;

export const getBookName = (state) => state.book.name;
export const getBookAuthor = (state) => state.book.author;

export default slice.reducer;
