import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-image" />
                    <div className="logo-text">GeekFoods</div>
                </div>

                <div className="navLinks">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quote">Quote</Link></li>
                        <li><Link to="/restaurant">Restaurant</Link></li>
                        <li><Link to="/foods">Foods</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <button>Get Started</button>
            </nav>
        </>
    );
}

export default Navbar;