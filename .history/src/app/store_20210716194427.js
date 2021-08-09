import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    book: booksReducer,
    counter: counterReducer,
  },
});
