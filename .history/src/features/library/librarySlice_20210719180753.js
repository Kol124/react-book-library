import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [],
    value: 0,
  },
  reducer: {
    addBook: (books, action) => {
      books.push({
        id: action.payload.id,
        name: action.payload.name,
        author: action.payload.author,
        completed: false,
      });
      console.log("--> ", books);
    },

    incrememnt: (state) => {
      state.value += 1;
      console.log("Counter: ");
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

export const { addBook, removeBook, completeBook, incrememnt } =
  librarySlice.actions;
export const selectBook = (state) => state.library.books;
export const selectCount = (state) => state.counter.value;

export default librarySlice.reducer;
