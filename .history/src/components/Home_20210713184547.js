import React from "react";
import Header from "./Header";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroContent>
        <Heading>Google Books</Heading>
        <Search type="text" placeholder="Search by Name" />
      </HeroContent>
    </div>
  );
}

const HeroContent = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3.5rem;
`;

const Grid = styled.main`
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  top: 72px;
  display: block;
  position: relative;
  padding: 0 calc(3.5vw + 5px);
`;

const Search = styled.input`
  font-family: "Josefin Sans", cursive;
  padding: 1.5rem 1rem 1rem 2rem;
  margin: 0 auto 1rem auto;
  height: 5.5rem;
  color: #ccc;
  width: 50%;
  outline: none;
  font-size: 1.8rem;
  border-radius: 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;
