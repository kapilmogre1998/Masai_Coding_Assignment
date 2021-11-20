import { Link } from "react-router-dom"
import './style/navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/show-cart">Show Cart</Link>
        </div>
    )
}
