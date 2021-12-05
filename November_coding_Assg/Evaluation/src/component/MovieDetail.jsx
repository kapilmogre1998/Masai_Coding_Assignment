import { useState,useEffect } from "react";
import { useLocation } from "react-router";
import {movies} from '../db.json';
import './style/movieDetail.css';
import { useHistory } from "react-router";

export const MovieDetail = () => {
    const [movieId,setMovieId] = useState();
    const {state:{id}} = useLocation();
    const history = useHistory();

    useEffect(() => {
       setMovieId(id)
    }, [movieId])


    return (
        <div>
            {
                movies.map(({id,movie_name,details,poster_url}) => 
                id ===  movieId ?
                <div className="move-details-contianer">
                    <div>
                    <img src={poster_url} alt="img" />
                    </div>
                    <div className="movie-description">
                    <div>
                        <p> <strong>Movie</strong> - {movie_name}</p>
                    </div>
                    <div>
                        <strong>Description</strong>  - {details}
                    </div>
                    </div>
                    <div>
                    <button onClick={()=>
                    history.push({
                        pathname: "/book-slot",
                        state:{
                            id : id
                        }
                    })
                    }>Book The Show</button>
                    </div>
                </div> : ""
                )
            }
        </div>
    )
}
