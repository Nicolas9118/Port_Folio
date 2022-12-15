/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
/*  ----  Import des composants  ----  */
import Header from "../../components/Header/Header";
import SectionFolio from "../../sections/Folio/SectionFolio";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
    return (
        <div className="contain">
            <Header />
            <SectionFolio />
            <Footer />
        </div>
    )
}

export default Portfolio;