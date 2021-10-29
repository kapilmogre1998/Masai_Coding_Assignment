import React from 'react'
import './stylesheet/navbar.css'
import { FaReact } from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className="mainDiv">
            <nav>
                <ul className="navList">
                    <li className="navItem"><FaReact size={30} className="react"/></li>
                    <li className="navItem"><a href="#">Home</a> </li>
                    <li className="navItem"><a href="#">Learn</a> </li>
                    <li className="navItem"><a href="#">About</a> </li>
                    <li className="navItem"><a href="#">Contact</a> </li>                    
                </ul>
            </nav>
        </div>
    )
}
