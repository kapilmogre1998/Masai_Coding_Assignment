import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style/dashboard.css'

export const Dashboard = () => {
    const dispatch = useDispatch();

    
    return (
        <>
        <div>
            {dispatch}
        </div>
        <div className="dashboard-main-container">
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiVVmmCSCwvLT80P5xSWZ5qP09pqPIpVuAA&usqp=CAU" alt="img" />
            <p>
            <button><Link to="/movie-section">Watch Latest Movies</Link></button>
            </p>
            </div>
            
        </div>
        </>
    )
}