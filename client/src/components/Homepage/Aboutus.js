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
                <p className="para"> My name is Sahar Kichi! I recently moved downtown Toronto in 2021 after living in Burlington my entire life! I am a complete newbie when it comes to web development and coding after deciding to choose this career choice over my orginial plan of law school. I recently graduated from Ryerson University with a Bachelor of Arts in Criminology and looking forward to complete my program at the University of Toronto. Ive learnt relevant languages such as HTML, CSS, React, Javascript and more!
                </p>
            </section>
            <section>
                <h2>Link Kawar</h2>
                <img className="link" src={Link} alt="Link Headshot"></img>
                <p className="para"> Hello, My name is Link (He/They) I am an up and coming developer just beginning to apply my newly learned coding abilities.
                Most of my experience is in the food industry with about 12 years under my belt. I've relocated from Toronto to Vancouver for a little while and hoping for the best while I'm here. My hopes are to continue practicing my code developing skills and apply my skills in community settings where they can help people organize. I am passionate about accessible health care and equality for Trans people and push to remain visible so that trans youth and the general public may have another possibility model available to them. I like spending time in nature and practicing my DJ mixing skills with a recent beginners controller.
                 </p>
            </section>

            <section>
                <h2>Mariya Setko</h2>
                <img className="mariya" src={Mariya} alt="Mariya Headshot"></img>
                <p className="para"> Hey! My name is Mariya. I am an aspiring full stack developer, currently studying at UofT in order to achieve that goal. The logic, need for attention to detail, and level of organization drew me to coding as a second career. Prior to bootcamp, I worked in the outdoor advertising industry for four years as a Production Specialist. My experience there has taught me the value of teamwork, importance for efficiency, and creative problemsolving. Work was most enjoyable when I was faced new problems and came up with ways to meet client expectations despite facing obstacles.
                </p>
             </section>
     </div>   
        
    )
}

export default AboutUs