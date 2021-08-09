import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <Navigation>
      <Logo>
        <img src={logo} className="App-logo" alt="logo" />
      </Logo>

      <NavMenu>
        <li>
          <StyledLink to="/" isActive={pathname === "/"}>
            <span>Home</span>
          </StyledLink>
        </li>

        <li>
          <StyledLink to="/Library" isActive={pathname === "/Library"}>
            <span>My Library</span>
          </StyledLink>
        </li>
      </NavMenu>
    </Navigation>
  );
};

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const Navigation = styled.nav`
  /* right: 0;
  top: 0.7rem; */
  display: flex;
  margin: 0 auto;
  font-size: 1.6rem;
  /* position: absolute; */
  /* background-color: grey; */
  justify-content: space-between;
  align-items: center;
  max-width: 130rem;
  padding: 0 1rem;
  height: 7.5rem;
  /* z-index: 3;
  left: 0; */
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  font-size: 0;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  text-transform: uppercase;
  list-style-type: none;
  position: relative;
  padding: 0px;
  margin: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;

  li:first-of-type {
    margin-right: 2.5rem;
  }
`;

const StyledLink = styled(Link)`
  span {
    color: #f9f9f9;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    font-weight: ${(p) => (p.isActive ? "700" : "500")};

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      position: absolute;
      bottom: -6px;
      content: "";
      height: 2px;
      opacity: 0;
      left: 0px;
      right: 0px;
      width: auto;
      visibility: hidden;
      transform: scaleX(0);
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

export default Nav;
