import React from 'react'
import {Link} from 'react-router-dom';
import './style/navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
