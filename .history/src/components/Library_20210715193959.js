import React from "react";
import styled from "styled-components";
import { Counter } from "../features/counter/Counter";

export default function Library() {
  return (
    <>
      <Container>
        <Counter />
      </Container>
    </>
  );
}

const Container = styled.main`
  max-width: 114rem;
  margin: -15rem auto 5rem auto;
`;
