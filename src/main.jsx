import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/stairs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs >
        <App />
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
);
