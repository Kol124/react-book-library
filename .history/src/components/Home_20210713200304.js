import React from "react";
import Header from "./Header";
// import BookCard from "./BookCard";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <HeroContent>
        <Heading>Google Books</Heading>
        <Search type="text" placeholder="Search by Name" />
      </HeroContent>
      <Grid>
        <Card>
          <img src="/images/book-01.jpg" alt="book-01" />
          <div>
            <h2>Dracula</h2>
            <h4>Bram Stoker</h4>
            <p>
              Lenteurs rouleurs les des j'aille peuple un l'amour baiser la
              suivi, enfants yeux mer des avec des vu comme, de.
            </p>
          </div>
        </Card>
        <Card>
          <img src="/images/book-02.jpg" alt="book-02" />
          <div>
            <h2>How to win friends and influence people</h2>
            <h4>Dale Carnegie</h4>
            <p>
              Lenteurs rouleurs les des j'aille peuple un l'amour baiser la
              suivi, enfants yeux mer des avec des vu comme, de.
            </p>
          </div>
        </Card>
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
  padding: 1.5rem 1rem 1rem 2rem;
  margin: 0 auto 1rem auto;
  height: 5.5rem;
  color: #ccc;
  width: 100%;
  outline: none;
  font-size: 1.8rem;
  border-radius: 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Grid = styled.main`
  display: grid;
  margin: -15rem auto 5rem auto;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem;
  width: 114rem;
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  padding: 1rem;

  > img {
    width: 15rem;
    display: block;
  }

  > div {
    flex-basis: 60%;
  }
`;
