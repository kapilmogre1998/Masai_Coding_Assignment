import { Link } from "react-router-dom"
import './style/navbar.css'

export const Navbar = () => {
    return (
        <div className="main-container">
                <Link to="/">Home</Link>
                <Link to="men">Men</Link>
                <Link to="women">Women</Link>
                <Link to="/children">Children</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
        </div>
    )
}
