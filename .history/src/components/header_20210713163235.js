import React from "react";
import styled from "styled-components";

const HeaderBackground = styled.header`
  background: #456482;
  height: 95vh;
  position: relative;
  background-image: linear-gradient(to right bottom, #456482, #133249),
    url("/images/lib-header-1");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 51%, 57% 79%, 0 44%);
`;

const Header = () => {
  return <HeaderBackground></HeaderBackground>;
};

export default Header;
