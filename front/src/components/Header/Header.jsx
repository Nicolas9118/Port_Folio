/*  ----  Import du css  ----  */
import "./style.css";

import Logo from "../../assets/Logo_fond_blanc.png"

/*  ----  Import des lib  ----  */
import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import  { bookOutline, homeOutline, personOutline } from "ionicons/icons";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo"/>

            <nav className="menu">
                <Link  to="/" className="link"> 
                    <IonIcon icon={homeOutline} />
                    <p> Accueil </p>
                </Link>
                <Link   to="/Projects" className="link linkMiddle"> 
                    <IonIcon icon={bookOutline} />
                    <p> Projets </p>
                </Link>
                <Link   to="/About" className="link"> 
                    <IonIcon icon={personOutline} />
                    <p> A Propos </p>
                </Link>
            </nav>
        </div>
    )
}

export default Header;