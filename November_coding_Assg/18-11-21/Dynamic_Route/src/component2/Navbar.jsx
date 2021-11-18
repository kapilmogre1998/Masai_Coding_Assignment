import { NavLink } from "react-router-dom"
import './style/navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/allproducts">
                All Products
            </NavLink>
            <NavLink to="/details/:id">
                Product Details
            </NavLink>
        </div>
    )
}