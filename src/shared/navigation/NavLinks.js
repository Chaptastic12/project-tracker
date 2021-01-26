import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
     return (
          <ul className="nav-links">
               <li>
                    <NavLink to="/" >DASHBOARD</NavLink>
               </li>
               <li>
                    <NavLink to="/project/create" >CREATE PROJECT</NavLink>
               </li> 
               <li>
                    <NavLink to="/login" >AUTHENTICATE</NavLink>
               </li>   
          </ul>
           
     )
}

export default NavLinks;