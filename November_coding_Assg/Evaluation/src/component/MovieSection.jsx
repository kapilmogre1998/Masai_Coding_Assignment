import { useHistory, useLocation } from "react-router"
import { Link } from "react-router-dom";
import { movies } from '../db.json';
import './style/movieSection.css';

export const MovieSection = () => {
    const history = useHistory();

    return (
        <div>
            <div className="movie-container">
                {
                    movies.map(({ id, poster_url, movie_name }) =>
                        <div key={id}>
                            <img src={poster_url} alt="" />
                            <p>{movie_name}</p>
                            <button onClick={() => history.push({
                                pathname: "/movie-details",
                                state: {
                                    id : id
                                }
                            })}>Details</button>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
}
