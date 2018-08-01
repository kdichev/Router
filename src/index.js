import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";

const App = () => <Root />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
