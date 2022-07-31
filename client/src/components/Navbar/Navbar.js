import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div id="nav" className='navigation'>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Aboutus">Who We Are &nbsp; &nbsp; </NavLink>

      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Products">Products &nbsp; &nbsp; </NavLink>

      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Checkout">Checkout<img href="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png" alt="shopping cart icon"/> &nbsp; &nbsp; </NavLink>

    </div>
  );
}

export default Navbar