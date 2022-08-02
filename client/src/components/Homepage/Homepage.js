import React from 'react';
import "./style.css";
import background from "../../assets/images/background.png";

function Homepage() {
    return (
        
    <div>
        <div style={{ backgroundImage: `url(${background})`}}> </div>
         <h1 className="blink">Flash Sales</h1>
                    <h6 className="productTitle">Lemon Haze</h6>
                        <div>
                            <img className = "productimage" src="https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-4.png?auto=compress&amp;w=1200&amp;h=630&amp;fit=crop&amp;bg=FFFFFF&amp;fit=fill" alt=""></img>
                            <p className ="productText">Strain: Sativa<br/>CBD-THC": "20%-20%
                            </p>
                            <h6 className="pricetag">$ 7/Gram</h6>
                            <button className="ATC">Add to Cart</button>
                      </div>
                
                    <div>
                        <div>
                            <h6 className="productTitle"> Pink Kush</h6>
                            <img className = "productimage"src="https://leafly-cms-production.imgix.net/wp-content/uploads/2020/04/21143425/PINK-KUSH-020.jpg" alt=""></img>
                            <p className ="productText"> Strain: Indica<br/>CBD-THC": "20%-20%
                            </p>
                            <h6 className="pricetag">$ 7/Gram</h6>
                            <button className="ATC">Add to Cart</button>
                        </div>
                    </div>
                        <div>
                                <div>
                                    <h6 className="productTitle"> Pineapple Express</h6>
                                    <img className = "productimage" src="https://images.hytiva.com/Pineapple-Express.jpg?mw667-mh1000" alt=""></img>
                                    <p className ="productText"> Strain: Sativa<br/>CBD-THC": "20%-20%
                                    </p>
                                    <h6 className="pricetag"> $ 7/Gram</h6>
                                    <button className="ATC">Add to Cart</button>
                        </div>
     </div>                     </div>
    )
}

export default Homepage