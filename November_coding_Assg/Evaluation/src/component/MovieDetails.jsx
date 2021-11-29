import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import {movies} from '../db.json';

export const MovieDetails = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <div>
          {
              movies.map(({id,poster_url,movie_name}) => 
                <div key={id}>
                    <img src={poster_url} alt="" />
                    <p>{movie_name}</p>
                    <Link to="/movie-details">Details</Link>
                </div>
                )
          }
        </div>
            {/* <Link to="/">
             Back
            </Link>
            Movie Details */}
        </div>
    )
}
