import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import BrainLoadEffect from "./components/BrainLoadEffect";
import Homepage from "./Homepage";
import UploadPage from "./UploadPage";
import Result from "./Result";
import Questionaire from "./components/Questionaire";
import QuestionResult from "./QuestionResult";
import Footer from "./components/footer";
import Signup from "./signUp";
import Login from "./login";
import { AuthProvider } from "../authContext";
import ProtectedRoute from "./components/protectedRoutes";
import KnowMore from "./KnowMore";
import PrivacyPolicy from "./privacy";
import About from "./About";
import Disclaimer from "./Disclaimer";
import TermsAndConditions from "./terms";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <BrainLoadEffect />
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            }
          />
          <Route
            path="/question"
            element={
              <ProtectedRoute>
                <Questionaire />
              </ProtectedRoute>
            }
          />
          <Route
            path="/questionResult"
            element={
              <ProtectedRoute>
                <QuestionResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="/knowmore"
            element={
              <ProtectedRoute>
                <KnowMore />
              </ProtectedRoute>
            }
          />{" "}
          <Route
            path="/privacy"
            element={
              <ProtectedRoute>
                <PrivacyPolicy />
              </ProtectedRoute>
            }
          />{" "}
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/disclaimer"
            element={
              <ProtectedRoute>
                <Disclaimer />
              </ProtectedRoute>
            }
          />{" "}
          <Route
            path="/terms"
            element={
              <ProtectedRoute>
                <TermsAndConditions />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
