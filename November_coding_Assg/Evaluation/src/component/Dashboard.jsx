import {movies} from '../db.json';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export const Dashboard = () => {
    return (
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
    )
}
