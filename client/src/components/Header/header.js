import React from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h1>Bud Hub</h1>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Login">Login &nbsp; &nbsp; </NavLink>        
            <Navbar />    
        </div>
    )
}

export default Header