import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled(NavLink)`
  margin: 5px;
  color: black;
  &.active {
    color: blue;
  }
`;

const Nav = ({ routes = [] }) =>
  routes.map(
    ({ path, name }, i) =>
      path && (
        <NavItem exact to={`${path}`} key={i}>
          {name}
        </NavItem>
      )
  );

export default Nav;
