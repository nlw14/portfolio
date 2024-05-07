import React from "react";
import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <div className="navigation">
            <div className="logo"></div>
            <div className="sous-navigation">
            <Link to="/" className="navItem">About</Link>
            <Link to="/projets" className="navItem">Projets</Link>
            <Link to="/contact" className="navItem">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;