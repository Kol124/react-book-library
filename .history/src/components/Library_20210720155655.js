// import React ,{ useState } from "react";
import styled from "styled-components";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { selectBooks } from "../features/library/librarySlice";

export default function Library() {
  const books = useSelector(selectBooks);

  return (
    <>
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
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  justify-content: center;
  grid-gap: 5rem;

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
`;
