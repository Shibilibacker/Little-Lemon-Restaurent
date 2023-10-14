import React, { useState } from 'react';
import logo from '../images/Logo .svg';


const Nav = () => {

    const [menuOpen, SetMenuOpen] = useState(false);

    const toggleMenu = () =>{
        SetMenuOpen(!menuOpen);
    }
  return (
    <nav className={'navbar ${menuopen ? "open" : ""}'}>
    <a href='/' classsName="logo">
    <img src={logo} alt='logo'/>
    </a>
    <div className="menu-icon" onClick={toggleMenu}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    </div>

    <ul className={'nav-links ${menuopen ? "visisble" :""}'}>
        <li>
            <a href='/'>Home</a> 
        </li>
        <li>
            <a href='/'>About</a> 
        </li>
        <li>
            <a href='/'>Services</a> 
        </li>
        <li>
            <a href='/'>Reservation</a> 
        </li>
        <li>
            <a href='/'>Order Online</a> 
        </li>
        <li>
            <a href='/'>Log in</a> 
        </li>
    </ul>
    </nav>
        
  )
}

export default Nav;
