import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPages from "./pages/LandingPages";
import Services from "./pages/Servicepage";
import Properties from "./pages/propertiespage";
import Aboutuspage from "./pages/Aboutuspage";
import ContactusPage from "./pages/Contactuspage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/services" element={<Services />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/about" element={<Aboutuspage />} />
      <Route path="/contact" element={<ContactusPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
    </Routes>
  );
}

export default App;
