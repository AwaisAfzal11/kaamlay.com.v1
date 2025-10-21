import "./index.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

// Import the new project components
import MotorwaySouthCity from "./Pages/Projects/MotorwaySouthCity";
import GoldmarkVentures from "./Pages/Projects/GoldmarkVentures";
import GoldmineResidence from "./Pages/Projects/GoldmineResidence";
import BusinessFarms from "./Pages/Projects/BusinessFarms";
import KallarKahar from "./Pages/Projects/KallarKahar";
import GoldmarkAvenue from "./Pages/Projects/GoldmarkAvenue";
import CountryClub from "./Pages/Projects/CountryClub";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Routes */}
          <Route path="/projects/motorway-south-city" element={<MotorwaySouthCity />} />
          <Route path="/projects/goldmark-ventures" element={<GoldmarkVentures />} />
          <Route path="/projects/goldmine-residence" element={<GoldmineResidence />} />
          <Route path="/projects/business-farms" element={<BusinessFarms />} />
          <Route path="/projects/kallar-kahar" element={<KallarKahar />} />
          <Route path="/projects/goldmark-avenue" element={<GoldmarkAvenue />} />
          <Route path="/projects/country-club" element={<CountryClub />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;