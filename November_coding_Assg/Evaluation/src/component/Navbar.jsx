import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './style/navbar.css'

export const Navbar = () => {
    const {message} = useSelector(store => store)

    return (
        <>
        <div className="display-messg">{message}</div>
        <div className="navbar">
            <Link to="/" style={{margin:"10px"}}>
               Dashboard
            </Link>
            <Link to="/about" style={{margin:"10px"}}>
              About
            </Link>
            <Link to="/" style={{margin:"10px"}}>
               Login
            </Link>
        </div>
        </>
    )
}


