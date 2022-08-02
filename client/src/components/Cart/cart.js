import React from 'react';
import "./style.css";
import { NavLink } from "react-router-dom";



function Cart() {
    return (
     <div> <h1>Cart Items:</h1>
         
         
         
         
         <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Checkout"> <button className='checkoutbtn'>Checkout</button> </NavLink>
     </div>   
    )
}

export default Cart