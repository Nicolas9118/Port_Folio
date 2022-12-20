/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
/*  ----  Import du chemin du CV  ----  */
import LinkCV from "../../assets/CV_Rolland_Nicolas_Integrateur_Web.pdf";

const Button = ({buttonName}) => {
    return (
        <a className="button" href={LinkCV} target="blank">
            <p> {buttonName} </p>
        </a>
    )
}

export default Button;