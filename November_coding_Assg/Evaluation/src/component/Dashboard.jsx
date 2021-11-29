import {movies} from '../db.json'

export const Dashboard = () => {
    return (
        <div>
          {
              movies.map(({poster_url,movie_name}) => 
                <div>
                    <img src={poster_url} alt="" />
                    <p>{movie_name}</p>
                </div>
                )
          }
        </div>
    )
}
