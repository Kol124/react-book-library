import React from "react";
import Header from "./Header";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Header />
      <Search type="text" placeholder="Search by Name" />
    </div>
  );
}

const Container = styled.main`
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
  position: absolute;
  height: 5.5rem;
  color: #ccc;
  width: 50%;
  top: 40%;
  left: 50%;
  outline: none;
  font-size: 1.8rem;
  border-radius: 3rem;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;
