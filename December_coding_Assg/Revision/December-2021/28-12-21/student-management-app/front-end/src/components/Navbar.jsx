import { Link, useHistory } from "react-router-dom"
import './style/navbar.css'

export const Navbar = () => {
    let token = localStorage.getItem("token");
    const history = useHistory();

    const handleLogout = ()=>{
        history.push("/login");
        window.localStorage.clear("token")
    }

    return (
        <nav className="navbar-section">
            <div>
                <Link to="/">Home</Link>
                <Link to="/contest" >Contests</Link>
                <Link to="/student" >Students</Link>
            </div>
            <div className="navbar-login-btn">
                <Link to="/login">{token ? <Link onClick={handleLogout} >Logout</Link> : "Login"}</Link>
            </div>
        </nav>
    )
}