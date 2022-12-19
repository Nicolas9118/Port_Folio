import { Routes, Route, HashRouter } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/PortFolio/Portfolio";


function Adresse() {
  return (
    <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<Portfolio />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
    </HashRouter>
  );
}

export default Adresse;