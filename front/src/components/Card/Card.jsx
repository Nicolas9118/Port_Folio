/*  ----  Import du css  ----  */
import "./style.css";

/*  ----  Import des lib  ----  */
import React from "react";
import { Link } from "react-router-dom";

/*  ----  Import des images fixes  ----  */
// import BackgroundHome from "../../assets/background_home.png";
// import MaxiSoulignement from "../../assets/maxi_soulignement.png";
// import Banner from "../../assets/banner_gears.png"
import Underline from "../../assets/mini_soulignement.png"
// import Illu from "../../assets/illu.png"


/*  ----  Import de la base de données  ----  */
// import jsonData from '../../data.json';





const Card = ({data}) => {
    return (
        <>
            <Link className="card" to={"/"}>
                <div className="image">
                    <img src={data.cover} alt="Cover Housing" />
                </div>

                <div className="detail">
                    <h3> {data.undertitle} </h3>
                    <img src={Underline} alt="" />
                    <p> {data.description} </p>
                </div>
                
            </Link>
        </>
    )
}

export default Card;