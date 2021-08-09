// import React ,{ useState } from "react";
import styled from "styled-components";
// import { useSelector, useDispatch } from "react-redux";
import { Counter } from "../features/counter/Counter";
import BookCover from "./BookCover";

export default function Library() {
  return (
    <>
      <Container>
        <Grid>
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
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
  grid-template-columns: repeat(auto-fit, minmax(20rem, 2fr));
  justify-content: center;
  grid-gap: 5rem;
`;
