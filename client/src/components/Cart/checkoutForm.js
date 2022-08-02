import React from 'react';
import "./style.css";

function checkoutForm() { 
    return (
        <div class="row">
                    <div class="col-75">
                            <div class="container">
                                    <form action="/action_page.php">

                                        <div class="row">
                                                <div class="col-50">
                                                    <h3>Billing Address</h3>
                                                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                                                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                                        <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                                                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                                                        <label for="city"><i class="fa fa-institution"></i> City</label>
                                                        <input type="text" id="city" name="city" placeholder="New York"></input>

                                                            <div class="row">
                                                                <div class="col-50">
                                                                    <label for="state">State</label>
                                                                        <input type="text" id="state" name="state" placeholder="NY"></input>
                    
                                                                        <div class="col-50">
                                                                        <label for="zip">Zip</label>
                                                                        <input type="text" id="zip" name="zip" placeholder="10001"></input>
                                </div>  </div>  </div>
                    </div>
        </div>

                                                                    <div class="col-50">
                                                                        <h3>Payment</h3>
                                                                        <label for="fname">Accepted Cards</label>
                                                                        <div class="icon-container">
                                                                            <i class="fa fa-cc-visa" style="color:navy;"></i>
                                                                            <i class="fa fa-cc-amex" style="color:blue;"></i>
                                                                            <i class="fa fa-cc-mastercard" style="color:red;"></i>
                                                                            <i class="fa fa-cc-discover" style="color:orange;"></i>
                
                                                                    <label for="cname">Name on Card</label>
                                                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                                                                    <label for="ccnum">Credit card number</label>
                                                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                                                                    <label for="expmonth">Exp Month</label>
                                                                    <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>

                                                                    <div class="row">
                                                                    <div class="col-50">
                                                                        <label for="expyear">Exp Year</label>
                                                                        <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                                                                    </div>
                                                                    <div class="col-50">
                                                                        <label for="cvv">CVV</label>
                                                                        <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                                                                    </div>
                                                                    </div>
                                                                </div>

                                                                </div>
                                                                <label>
                                                                <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing</input>
                                                                </label>
                                                                <input type="submit" value="Continue to checkout" class="btn"></input>
                                                            </form>
                                                            </div>
                                                        </div>

                                                        <div class="col-25">
                                                            <div class="container">
                                                            <h4>Cart
                                                                <span class="price" style="color:black">
                                                                <i class="fa fa-shopping-cart"></i>
                                                                <b>4</b>
                                                                </span>
                                                            </h4>
                                                            <p><a href="#">Product 1</a> <span class="price">$15</span></p>
                                                            <p><a href="#">Product 2</a> <span class="price">$5</span></p>
                                                            <p><a href="#">Product 3</a> <span class="price">$8</span></p>
                                                            <p><a href="#">Product 4</a> <span class="price">$2</span></p>
                                                            
                                                            <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
                                                            </div>
                                                        </div>
                                                        </div>
    )
}

export default checkoutForm