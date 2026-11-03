import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPages from "./pages/LandingPages";
import Servicepage from "./pages/Servicepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/services" element={<Servicepage />} />
    </Routes>
  );
}

export default App;
