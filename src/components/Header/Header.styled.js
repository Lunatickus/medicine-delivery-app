import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 50px;
  font-size: 18px;

  .header-nav {
    height: 100%;
  }

  .header-link:first-child {
    border-right: 1px solid black;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  height: 100%;
  padding: 10px;
  color: blue;

  &.active {
    color: blueviolet;
  }
`;
