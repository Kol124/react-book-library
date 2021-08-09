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
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </span>
            <p>
              There undaunted bird and though swung and prophet, surely this
              stock but rustling gently lenore, black the this doubting muttered
              fancy.
            </p>
            <Buttons>
              <button disabled="">Add to Library</button>
              <button disabled="">Add to Completed</button>
            </Buttons>
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
  transform: translate(-50%, 0%);
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
  margin: -5rem auto 5rem auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  max-width: 114rem;

  @media only screen and (max-width: 480px) {
    display: block;
  }
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0 1rem 3.5rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;

  > img {
    width: 35%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;

    h2 {
      color: #133249;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.5rem;
      color: #52584d;
      font-weight: 400;
    }

    p {
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 1px;
    }

    span {
      margin: 1.5rem 0;

      i {
        margin-right: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 1.5rem;

  button {
    font-family: Josefin Sans, sans-serif;
    background-color: #133249;
    outline: none;
    border: none;
    color: #f9f9f9;
    padding: 1.2rem 1.5rem;
  }

  button:first-of-type {
    margin-right: 2rem;
  }
`;
