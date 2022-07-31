import React from 'react';
import { NavLink } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
        <div>
            <h1 id="footer">BudHub Established 2022 - 20% of our proceeds will be helping the: <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="https://www.lastprisonerproject.org/">Last Prisoner Project</NavLink>  </h1>         
        </div>
    )
}

export default Footer