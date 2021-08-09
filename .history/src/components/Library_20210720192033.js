import React, { useEffect } from "react";
import styled from "styled-components";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { selectBooks } from "../features/library/librarySlice";

export default function Library() {
  const books = useSelector(selectBooks);

  useEffect(() => {
    localStorage.setItem("book", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <HeroContent>
        <Heading>My Books</Heading>
      </HeroContent>
      <Container>
        <Grid>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Grid>
      </Container>
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

const Container = styled.main`
  max-width: 100rem;
  margin: -15rem auto 10rem auto;

  @media only screen and (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 25rem));
  justify-content: center;
  grid-gap: 5rem;

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
`;
