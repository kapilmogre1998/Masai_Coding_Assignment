import { Link } from "react-router-dom"
import './style/navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard/setting">Setting</Link>
        </div>
    )
}
