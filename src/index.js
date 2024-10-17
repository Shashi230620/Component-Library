import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ButtonTypes from "./Website/Components/Button/ButtonTypes";
import Accorrdion from "./Website/Components/Accordion/Accorrdion";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
