import React from "react";
import Header from "./Header";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Header />
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
