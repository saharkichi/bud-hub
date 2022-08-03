import React from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/BudHub-logo.png"
import "./style.css";
import Auth from '../../utils/auth';


function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <div className="header">
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Home"> <img className="logo" src={Logo} alt="BudHub"></img> </NavLink>
           <br/>
           <div>
          {Auth.loggedIn() ? (
            <>
              <button className="logout" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
             <NavLink id="LoginLink" className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Login">Login </NavLink>  
            </>
          )}
        </div>
                  
            <Navbar />    
        </div>
    )
}

export default Header