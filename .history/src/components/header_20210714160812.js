import React from "react";
import styled from "styled-components";

const HeaderBackground = styled.header`
  height: 90vh;
  z-index: -100;
  position: relative;
  background-image: linear-gradient(
      to right bottom,
      rgb(245, 203, 92, 0.6),
      rgba(239, 202, 144, 0.8)
    ),
    url("/images/lib-header-2.jpg");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 62% 66%, 32% 88%, 0 57%);
`;

const Header = () => {
  return <HeaderBackground />;
};

export default Header;
