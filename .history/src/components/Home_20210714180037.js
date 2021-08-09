import React from "react";
import Header from "./Header";
import BookCard from "./BookCard";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <HeroContent>
        <Heading>Google Books</Heading>
        <Search type="text" placeholder="Search by Name" />
      </HeroContent>
      <Grid>
        <BookCard />
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  background-image: url("/images/header-1.jpg");
  background-position: center;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  background-size: cover;
`;

const HeroContent = styled.div`
  /* position: absolute;
  width: 55%;
  top: 40%;
  left: 50%; */
  margin: 0 auto;
  /* transform: translate(-50%, -10%); */
`;

const Heading = styled.h1`
  font-size: 6.5rem;
  color: #f9f9f9;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Search = styled.input`
  font-family: "Josefin Sans", cursive;
  padding: 1.5rem 1rem 1rem 2rem;
  margin: 0 auto 1rem auto;
  height: 5.5rem;
  border: none;
  color: #ccc;
  width: 100%;
  outline: none;
  font-size: 1.8rem;
  border-radius: 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Grid = styled.main`
  display: grid;
  margin: 0 auto 5rem auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  max-width: 114rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
