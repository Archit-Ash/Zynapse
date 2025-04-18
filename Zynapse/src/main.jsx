import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import BrainLoadEffect from "./components/BrainLoadEffect";
import Homepage from "./Homepage";
import UploadPage from "./UploadPage";
import Result from "./Result";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BrainLoadEffect />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
