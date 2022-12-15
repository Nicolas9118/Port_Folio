/*  ----  Import du css  ----  */
import "./style.css";

/*  ----  Import des lib  ----  */
import React from "react";

/*  ----  Import des images fixes  ----  */
// import BackgroundHome from "../../assets/background_home.png";
// import MaxiSoulignement from "../../assets/maxi_soulignement.png";
// import Banner from "../../assets/banner_gears.png"
// import Underline from "../../assets/soulignement.png"
// import Illu from "../../assets/illu.png"

const Button = ({buttonName}) => {
    return (
        <button className="button">
            <p> {buttonName} </p>
        </button>
    )
}

export default Button;