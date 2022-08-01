import React from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/BudHub-logo.png"
import "./style.css";

function Header() {
    return (
        <div className="header">
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Home"> <img className="logo" src={Logo} alt="BudHub"></img> </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Login">Login </NavLink>        
            <Navbar />    
        </div>
    )
}

export default Header