import React from "react";
import Header from "./Header";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <HeroContent>
        <Heading>Google Books</Heading>
        <Search type="text" placeholder="Search by Name" />
      </HeroContent>
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
  text-align: center;
  font-size: 6.5rem;
  color: #f9f9f9;
  margin-bottom: 1rem;
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
  width: 100%;
  outline: none;
  font-size: 1.8rem;
  border-radius: 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;
