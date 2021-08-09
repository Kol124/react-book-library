import React, { useState } from "react";
// import Header from "./Header";
import BookCard from "./BookCard";
import styled from "styled-components";
import axios from "axios";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
        console.log(res.data.items);
      });
  }

  return (
    <>
      {/* <Header /> */}
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
        {results &&
          results.map((book) => <BookCard key={book.id} book={book} />)}
      </Grid>
    </>
  );
}

const HeroContent = styled.div`
  position: absolute;
  max-width: 100rem;
  top: 40%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
`;

const Heading = styled.h1`
  font-size: 6.5rem;
  color: #f9f9f9;
  text-align: center;
  margin-bottom: 5%;
`;

const Search = styled.input`
  font-family: "Josefin Sans", cursive, sans-serif;
  margin: 0 auto 1rem auto;
  height: 5.5rem;
  border: none;
  width: 100%;
  outline: none;
  color: #dd6529;
  font-size: 2rem;
  border-radius: 3rem;
  padding: 1.5rem 1rem 1rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Grid = styled.main`
  grid-template-columns: repeat(2, 1fr);
  margin: -15rem auto 5rem auto;
  grid-gap: 2rem;
  display: grid;
  max-width: 114rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
