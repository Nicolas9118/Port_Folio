/*  ----  Import du css  ----  */
import "./style.css";

/*  ----  Import des lib  ----  */
import React from "react";

const test = ({data}) => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>This is content</h3>
                        <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default test;