import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPages from "./pages/LandingPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
    </Routes>
  );
}

export default App;
