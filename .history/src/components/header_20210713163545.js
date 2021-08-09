import React from "react";
import styled from "styled-components";

const HeaderBackground = styled.header`
  height: 95vh;
  position: relative;
  background-image: linear-gradient(
      to right bottom,
      rgba(29, 233, 135, 0.65),
      #133249
    ),
    url("/images/lib-header-1");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 51%, 57% 79%, 0 44%);
`;

const Header = () => {
  return <HeaderBackground></HeaderBackground>;
};

export default Header;
