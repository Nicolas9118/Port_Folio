/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
/*  ----  Import des images fixes  ----  */
import MaxiSoulignement from "../../assets/maxi_soulignement.png";
/*  ----  Import des composants  ----  */
import Card from "../../components/Card/Card";
/*  ----  Import de la base de données  ----  */
import jsonData from '../../data.json';

const SectionFolio = () => {
    return (
        <>
            <h1> Mes projets </h1>
            <img src={MaxiSoulignement} alt="" />
            <div className="gallery">
                {jsonData.map(data => <Card data={data}/> )}
            </div>
        </>
    )
}

export default SectionFolio;