import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/PortFolio/Portfolio";


function Adresse() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<Portfolio />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Adresse;