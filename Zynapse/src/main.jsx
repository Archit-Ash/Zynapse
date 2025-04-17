import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BrainLoadEffect from "./components/BrainLoadEffect";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrainLoadEffect />
  </StrictMode>
);
