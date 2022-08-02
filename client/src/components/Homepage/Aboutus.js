import React from 'react';
import "./style.css";
const Sahar = require("../../assets/images/sahar.jpeg"); 
const Link = require("../../assets/images/link.jpeg");
const Mariya = require("../../assets/images/mariya.jpeg");

function AboutUs() {
    return (
     <div>
         <h1>Meet our Team!</h1>
            
            <section>
                <h2>Sahar Kichi</h2>
                <img className="sahar" src={Sahar} alt="Sahar Headshot"></img>
            </section>

            <section>
                <h2>Link Kawar</h2>
                <img className="link" src={Link} alt="Link Headshot"></img>
            </section>

            <section>
                <h2>Mariya Setko</h2>
                <img className="mariya" src={Mariya} alt="Mariya Headshot"></img>
             </section>
     </div>   
        
    )
}

export default AboutUs