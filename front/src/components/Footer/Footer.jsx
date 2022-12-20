/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
import { IonIcon } from "@ionic/react";
import  { logoGithub, logoLinkedin } from "ionicons/icons";


const Footer = () => {
    return (
        <div className="footer">
            <a  href="https://github.com/Nicolas9118" className="work"> 
                <IonIcon icon={logoGithub} />
            </a>

            <p> © Rolland Nicolas | 2022 </p>

            <a  href="https://www.linkedin.com/in/nicolas-rolland-4698ab259/" className="work"> 
                <IonIcon icon={logoLinkedin} />
            </a>
        </div>
    )
}

export default Footer;