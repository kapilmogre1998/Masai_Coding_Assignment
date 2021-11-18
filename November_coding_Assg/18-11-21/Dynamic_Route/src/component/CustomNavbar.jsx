import React from 'react'
import './stylesheet/CustomNavbar.css'
import { FaReact } from "react-icons/fa";

export const CustomNavbar = (props) => {
    return (
        <div className="navDiv">
            <nav >
                <ul className="CustomList">
                <li><FaReact/></li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Start Page</li>
                <li>Prices</li>
                <li>Offer</li>
                </ul>
            </nav>
        </div>
    )
}
