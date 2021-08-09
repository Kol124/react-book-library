import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../features/library/librarySlice";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    library: libraryReducer,
    counter: counterReducer,
  },
});
