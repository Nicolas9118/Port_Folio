/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
/*  ----  Import des composants  ----  */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionAbout from "../../sections/Me/SectionAbout";

const About = () => {
    return (
        <div className="contain">
            <Header />
            <SectionAbout />
            <Footer />
        </div>
    )
}

export default About;