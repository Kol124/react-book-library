import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [{ id: 1, name: "Trial", author: "KayPee" }],
  },
  reducer: {
    addBook: (books, action) => {
      books.push({
        id: action.payload.id,
        name: action.payload.name,
        author: action.payload.author,
        completed: false,
      });
      console.log("-------");
      console.log(books);
      console.log("-------");
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

export const { addBook, removeBook, completeBook } = librarySlice.actions;
export const selectBook = (state) => state.library.books;

export default librarySlice.reducer;