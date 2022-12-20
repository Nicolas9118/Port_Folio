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
                    <p className="presentation"> Mon parcours professionnel ne démarre pas en tant que développeur web. Mes expériences précédantes m'ont
                        permis d'acquérir des compétences qui me permettent une bonne adaptabilité dans toute sorte de situation. Mon dipôme 
                         BTS 
                        informatique de 2012 et ma foramtion de développeur web en 2022 font de moi un développeur polyvalent à travers différents projets.
                        Méticuleux, organisé et curieux, j'aime travailler divers projets et les peaufiner jusqu'aux moindre petits détails. </p>
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