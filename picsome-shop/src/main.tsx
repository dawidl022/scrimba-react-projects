import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ImageContextProvider } from "./ImageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ImageContextProvider>
      <Router>
        <App />
      </Router>
    </ImageContextProvider>
  </React.StrictMode>
);
