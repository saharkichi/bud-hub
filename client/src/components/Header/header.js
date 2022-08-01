import React from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <div className="header">
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Home"> <h1>Bud Hub</h1> </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Login">Login </NavLink>        
            <Navbar />    
        </div>
    )
}

export default Header