import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./components/Community.jsx";
import Docs from "./components/Docs/Docs.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/community" element={<Community />} />
        <Route path="/docs" element={<Docs />} />
  
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
