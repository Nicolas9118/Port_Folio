/*  ----  Import du css  ----  */
import "./style.css";
/*  ----  Import des lib  ----  */
import React from "react";
/*  ----  Import des images fixes  ----  */
import Underline from "../../assets/mini_soulignement.png"


const Card = ({data}) => {
    return (
        <>
            <a className="card" href={data.link} target="blank">
                <div className="image">
                    <img src={data.cover} alt="Cover Housing" />
                </div>

                <div className="detail">
                    <h3> {data.undertitle} </h3>
                    <img src={Underline} alt="" />
                    <p> {data.description} </p>
                </div>
                
            </a>
        </>
    )
}

export default Card;