import React from "react";
import styled from "styled-components";

const AppBarBase = styled.div`
  display: flex;
  align-items: center
`;

const NavContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const AppBar = props => (
  <AppBarBase>
    Header <NavContainer>{props.children}</NavContainer>
  </AppBarBase>
);

export default AppBar;
