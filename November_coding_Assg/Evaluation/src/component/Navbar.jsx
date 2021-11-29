import { Link } from "react-router-dom"
import './style/navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/dashboard" style={{margin:"10px"}}>
               Dashboard
            </Link>
            <Link to="/about" style={{margin:"10px"}}>
              About
            </Link>
            <Link to="/" style={{margin:"10px"}}>
               Login
            </Link>
        </div>
    )
}
