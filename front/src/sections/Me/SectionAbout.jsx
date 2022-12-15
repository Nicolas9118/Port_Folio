/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
/*  ----  Import des images fixes  ----  */
import MaxiSoulignement from "../../assets/maxi_soulignement.png";
import Illu from "../../assets/illu.png";
/*  ----  Import des composants  ----  */
import Bouton from "../../components/Bouton/Bouton";

const SectionAbout = () => {
    return (
        <>
            <h1> A Propos de moi </h1>
            <div className="container">
                <div className="left">
                    <p className="presentation"> Mon parcours professionnel ne démarre pas en tant que développeur web, cela m'a permis d'acquérir des compétences qui me permettes une bonne adaptabilités dans toutes sorte de situation.
                        Diplomé tout de même d'un BTS Informatique en 2012 et une foramtion de développeur web en 2022 font de moi un développeur polyvalent via différent projet.
                        Méticuleux, organisé et curieux j'aime travaillé sur plein de projets différents et de les peaufiner jusqu'au petits détails </p>
                    <img src={MaxiSoulignement} alt="" />
                    <Bouton buttonName="Télécharger CV" /> 
                </div>

                <div className="right">
                    <img src={Illu} alt="" />
                </div>
            </div>
        </>
    )
}

export default SectionAbout;