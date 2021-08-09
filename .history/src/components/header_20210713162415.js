import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: #456482;
  height: 95vh;
  clip-path: polygon(
    0% 15%,
    0 0,
    15% 0%,
    85% 0%,
    100% 0,
    100% 15%,
    100% 76%,
    88% 88%,
    88% 88%,
    65% 64%,
    28% 91%,
    0 51%
  );
`;

const header = () => {
  return <Header></Header>;
};

export default Header;
