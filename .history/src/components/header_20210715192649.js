import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const HeaderBackground = styled.header`
  height: 95vh;
  z-index: -100;
  position: relative;
  background-image: linear-gradient(
      to right bottom,
      rgba(120, 65, 46, 0.3),
      rgb(245, 203, 92, 0.3)
    ),
    url("/images/header-2.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 62% 66%, 32% 88%, 0 57%);
`;

const Header = () => {
  return (
    <HeaderBackground>
      <Nav />
    </HeaderBackground>
  );
};

export default Header;
