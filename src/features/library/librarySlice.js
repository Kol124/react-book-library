import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [
      {
        id: "Y41zAwAAQBAJ",
        title: "Sapiens",
        authors: ["Yuval Noah Harari"],
        link: "http://books.google.com/books?id=Y41zAwAAQBAJ&dq=Sapiens&hl=&cd=2&source=gbs_api",
        image:
          "http://books.google.com/books/content?id=Y41zAwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        completed: false,
      },
      {
        id: "ZQN7vgAACAAJ",
        title: "Crime and Punishment",
        authors: ["Fyodor Dostoevsky"],
        link: "http://books.google.com/books?id=ZQN7vgAACAAJ&dq=cRIME+and+punishment&hl=&cd=2&source=gbs_api",
        image:
          "http://books.google.com/books/content?id=ZQN7vgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        completed: true,
      },
      {
        id: "cWT6DwAAQBAJ",
        title: "The Madness of Crowds",
        authors: ["Douglas Murray"],
        link: "http://books.google.com/books?id=cWT6DwAAQBAJ&dq=Madness+of+Crowds&hl=&cd=1&source=gbs_api",
        image:
          "http://books.google.com/books/content?id=cWT6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        completed: false,
      },
      {
        id: "vkb4mwEACAAJ",
        title: "Kratos",
        authors: ["Gwendolyn Taunton"],
        link: "http://books.google.com/books?id=vkb4mwEACAAJ&dq=Kratos&hl=&cd=4&source=gbs_api",
        image:
          "http://books.google.com/books/content?id=vkb4mwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        completed: false,
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        id: action.payload.id,
        title: action.payload.volumeInfo.title,
        authors: action.payload.volumeInfo.authors,
        link: action.payload.volumeInfo.previewLink,
        image: action.payload.volumeInfo.imageLinks.thumbnail,
        completed: false,
      });
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },

    completeBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[index].completed = !state.books[index].completed;
      console.log(state.books[index].completed);
    },
  },
});

export const { addBook, completeBook, removeBook } = librarySlice.actions;

export const selectBooks = (state) => state.library.books;

export default librarySlice.reducer;
