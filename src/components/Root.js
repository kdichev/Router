import React, { Fragment } from "react";
import Routes from "./Routes";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import RoutesProvider from "./RoutesProvider";
import AppBar from "./AppBar";

const Root = () => (
  <BrowserRouter>
    <RoutesProvider>
      {data => (
        <Fragment>
          <AppBar>
            <Nav routes={data} />
          </AppBar>
          <Routes routes={data} />
        </Fragment>
      )}
    </RoutesProvider>
  </BrowserRouter>
);

export default Root;
