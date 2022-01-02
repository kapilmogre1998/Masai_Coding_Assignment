import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './style/navbar.css'

export const Navbar = () => {

    const {toggle,toggleTheme} = useContext(AppContext)

    return (
        <div className='navbar-section'>
            <h5>Where in the world?</h5>
            <div className='navbar-mode'>
            <button className='navbar-section-btn-1' onClick={toggleTheme}> {toggle === "light" ? <i className="fas fa-moon"> Dark Mode</i> : <i className="far fa-sun"> Light Mode</i>}  </button>
            </div>
        </div>
    )
}