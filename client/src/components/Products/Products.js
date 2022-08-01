import React from 'react';
import "./style.css";

function Products() {
    return (
       <section>
              <div>
                <h1 id="flowerheader">Flower</h1>
                <div>
                  <div>
                    <div>
                      <div>
                        <h6 className="productTitle">Lemon Haze</h6>
                        <img className = "productimage" src="https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-4.png?auto=compress&amp;w=1200&amp;h=630&amp;fit=crop&amp;bg=FFFFFF&amp;fit=fill" alt=""></img>
                        <p className ="productText">Strain: Sativa<br/>CBD-THC": "20%-20%
                        </p>
                        <h6 className="pricetag">$ 10/Gram</h6>
                        <button className="ATC">Add to Cart</button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h6 className="productTitle"> Pink Kush</h6>
                        <img className = "productimage"src="https://leafly-cms-production.imgix.net/wp-content/uploads/2020/04/21143425/PINK-KUSH-020.jpg" alt=""></img>
                        <p className ="productText"> Strain: Indica<br/>CBD-THC": "20%-20%
                        </p>
                        <h6 className="pricetag">$ ​10/Gram</h6>
                        <button className="ATC">Add to Cart</button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h6 className="productTitle"> Pineapple Express</h6>
                        <img className = "productimage" src="https://images.hytiva.com/Pineapple-Express.jpg?mw667-mh1000" alt=""></img>
                        <p className ="productText"> Strain: Sativa<br/>CBD-THC": "20%-20%
                        </p>
                        <h6 className="pricetag"> $ 10/Gram</h6>
                        <button className="ATC">Add to Cart</button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h6 className="productTitle"> Death Bubba</h6>
                        <img className = "productimage" src="https://growingexposed.com/wp-content/uploads/2019/08/Death-Bubba-Feature-Photo-1.jpg" alt=""></img>
                        <p className ="productText"> Strain: Indica<br/>CBD-THC": "20%-20%
                        </p>
                        <h6 className="pricetag"> $ 10/Gram</h6>
                        <button className="ATC">Add to Cart</button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h6 className="productTitle"> Jean Guy</h6>
                        <img className = "productimage"src="https://www.7acres.com/wp-content/uploads/2021/04/JEAN-GUY-transparent-square-1.png" alt="" ></img>
                        <p className ="productText"> Strain: Hybrid<br/>CBD-THC": "20%-20%
                        </p>
                        <h6 className="pricetag"> $ 10/Gram</h6>
                        <button className="ATC">Add to Cart</button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h6 className="productTitle"> White Widow</h6>
                        <img className = "productimage"src="https://images.leafly.com/flower-images/white-widow.png" alt=""></img>
                        <p className ="productText"> Strain: Hybrid<br/>CBD-THC": "20%-20%
                        </p>
                        <h6 className="pricetag"> $ 10/Gram</h6>
                        <button className="ATC">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
    )
}

export default Products