import React from 'react';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "../../assets/images/bud-cart.png"
import "./style.css";

function Navbar() {
    return (
        <div id="nav" className='navigation'>
      
      <NavLink id="WWA" className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Aboutus">Who We Are</NavLink>

      <NavLink id="prods" className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Products">Products</NavLink>

      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Cart"><img className="SC" src={ShoppingCartIcon} alt="shopping cart icon"></img> </NavLink>

    </div>
    
  );
}

export default Navbar
