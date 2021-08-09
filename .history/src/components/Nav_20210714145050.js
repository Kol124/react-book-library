import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

const Nav = () => {
  return (
    <Navigation>
      <Logo>
        <img src={logo} className="App-logo" alt="logo" />
      </Logo>

      <NavMenu>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">My Library</Link>
        </li>
      </NavMenu>
    </Navigation>
  );
};

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const Navigation = styled.nav`
  right: 0;
  top: 0.7rem;
  display: flex;
  margin: 0 auto;
  font-size: 1.6rem;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  max-width: 130rem;
  padding: 0 2rem;
  height: 7rem;
  z-index: 3;
  left: 0;
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
  margin-right: 5rem;
  margin: 0px;
  padding: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;

  a {
    span {
      color: rgb(249, 249, 249);
      white-space: nowrap;
      line-height: 1.08;
      margin-left: 8px;
      cursor: pointer;
      font-size: 13px;
      padding: 2px 0px;
      position: relative;
      letter-spacing: 1.42px;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        position: absolute;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
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
  }
`;

const StyledLink = styled(Link)`
  color: #f9f9f9;
  display: block;
  padding: 4px 8px;
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "700" : "500")};
`;

export default Nav;
