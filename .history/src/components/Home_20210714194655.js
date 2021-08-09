import React, { useState } from "react";
// import Header from "./Header";
import BookCard from "./BookCard";
import styled from "styled-components";

export default function Home() {
  const [query, useQuery] = useState("");
  const [results, setResults] = useState([]);

  const HandleChange = (e) => {
    setQuery(e.target.value);

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  };

  return (
    <>
      {/* <Header /> */}
      <HeroContent>
        <Heading>Google Books</Heading>
        <Search
          type="text"
          placeholder="Search for Book"
          onChange={HandleChange}
        />
      </HeroContent>
      <Grid>
        <BookCard />
      </Grid>
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
`;

const Heading = styled.h1`
  font-size: 6.5rem;
  color: #f9f9f9;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Search = styled.input`
  font-family: "Josefin Sans", cursive;
  margin: 0 auto 1rem auto;
  height: 5.5rem;
  border: none;
  color: #ccc;
  width: 100%;
  outline: none;
  font-size: 2rem;
  border-radius: 3rem;
  padding: 1.5rem 1rem 1rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Grid = styled.main`
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto 5rem auto;
  grid-gap: 2rem;
  display: grid;
  max-width: 114rem;
  transform: translate(0, -50%);

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
