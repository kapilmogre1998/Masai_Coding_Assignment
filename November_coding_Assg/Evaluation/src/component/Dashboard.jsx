import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>

            <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="img" />
            <p>
            <Link to="/movie-details">Watch Recent Movies</Link>
            </p>
          {/* {
              movies.map(({id,poster_url,movie_name}) => 
                <div key={id}>
                    <img src={poster_url} alt="" />
                    <p>{movie_name}</p>
                    <Link to="/movie-details">Details</Link>
                </div>
                )
          } */}
        </div>
    )
}
