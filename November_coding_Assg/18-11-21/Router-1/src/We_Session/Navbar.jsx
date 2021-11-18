import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/" >
                Home
            </Link>
            <Link to="/about" style={{ padding: " 0px 20px" }}>
                About
            </Link>
            <Link to="/userlist">
                UserList
            </Link>
        </div>
    )
}
