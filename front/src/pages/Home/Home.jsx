/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
/*  ----  Import des images fixes  ----  */
import BackgroundHome from "../../assets/background_home.png";
import BannerGears from "../../assets/banner_gears.png";
/*  ----  Import des composants  ----  */
import Header from "../../components/Header/Header";
import SectionFolio from "../../sections/Folio/SectionFolio";
import SectionAbout from "../../sections/Me/SectionAbout";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header />

            <div className="homeContainer">
                <div className="bg">
                    <img src={BackgroundHome} alt="" />
                </div>
                
                <div className="text">
                    <p className="name"> Nicolas ROLLAND </p>
                    <h1> Développeur Web </h1>
                    <p> Sensibilité à l'intégration, design </p>
                </div>
            </div>

            <div className="folioContainer">
                <SectionFolio />
            </div>

            <div className="banner">
                <img src={BannerGears} alt="" />
            </div>

            <div className="aboutContainer">
                <SectionAbout />
            </div>

            <Footer />
        </div>
    )
}

export default Home;