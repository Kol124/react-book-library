import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: #456482;
  height: 95vh;
  clip-path: polygon(0 0, 100% 0, 100% 51%, 57% 79%, 0 44%);
`;

const header = () => {
  return <Header></Header>;
};

export default Header;
