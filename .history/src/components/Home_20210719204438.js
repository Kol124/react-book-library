import React, { useState } from "react";
import ResultCard from "./ResultCard";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectBooks } from "../features/library/librarySlice";

export const bookResults = [
  {
    id: Math.random(),
    image: "/images/book-03.jpg",
    title: "The Hound of Baskervilles",
    author: "Sir Arthur Conan Doyle",
  },

  {
    id: Math.random(),
    image: "/images/book-02.jpg",
    title: "how to win friends and influence people",
    author: "Andrew Carnegie",
  },
  {
    id: Math.random(),
    image: "/images/book-01.jpg",
    title: "Dracula",
    author: "Bram Stoker",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const books = useSelector(selectBooks);

  const HandleChange = (e) => {
    setQuery(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get(
        ` https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
      )
      .then((res) => {
        setResults(res.data.items);
        console.log(results);
      });
  }

  return (
    <>
      <HeroContent>
        <Heading>Google Books</Heading>
        <form onSubmit={handleSubmit}>
          <Search
            type="text"
            value={query}
            placeholder="Search for Book"
            onChange={HandleChange}
          />
        </form>
      </HeroContent>
      <Grid>
        {bookResults &&
          bookResults.map((book) => <ResultCard key={book.id} book={book} />)}
      </Grid>
      <hr />
      <GridResult>
        {books.map((book) => (
          <ResultCard key={book.id} book={book} />
        ))}
      </GridResult>
    </>
  );
}

const HeroContent = styled.div`
  position: absolute;
  width: 55%;
  top: 40%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 480px) {
    width: 75%;
  }
`;

const Heading = styled.h1`
  font-size: 6.5rem;
  color: #f9f9f9;
  margin-bottom: 5%;
  text-align: center;
`;

const Search = styled.input`
  font-family: "Josefin Sans", cursive, sans-serif;
  margin: 0 auto 1rem auto;
  height: 5.5rem;
  border: none;
  width: 100%;
  outline: none;
  font-size: 2rem;
  border-radius: 3rem;
  padding: 1.5rem 1rem 1rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Grid = styled.main`
  grid-template-columns: repeat(2, 1fr);
  margin: -15rem auto 5rem auto;
  display: grid;
  grid-gap: 2rem;
  max-width: 114rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridResult = styled.main`
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem auto 5rem auto;
  display: grid;
  grid-gap: 2rem;
  max-width: 114rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
