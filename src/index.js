import React from "react";
import { render } from "react-dom";

import App from "./App";

import "./styles/main.scss";

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
