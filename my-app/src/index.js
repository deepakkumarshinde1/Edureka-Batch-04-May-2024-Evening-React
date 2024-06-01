import React from "react"; // node_module
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js"; // custom
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("edureka"));

root.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>
);
