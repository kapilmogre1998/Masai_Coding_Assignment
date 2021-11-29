import { useLocation } from "react-router"
import { Link } from "react-router-dom";

export const MovieDetails = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Link to="/">
             Back
            </Link>
            Movie Details
        </div>
    )
}
