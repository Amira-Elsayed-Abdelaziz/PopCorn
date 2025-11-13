import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function MovieCard({movie}) {
    console.log(movie)
    return (
        <div className="movie-card">
            <div className="card-poster">
                <img className="poster" src={movie.poster_path} />

            </div>
            <div className="card-details">
                <div>
                    <h4>{movie.title}</h4>
                    <span className="rate">
                        <FontAwesomeIcon icon={faStar} />{movie.vote_average}
                        </span>

                </div>
                <div>
                    {/* <span className="type">{movie.Genre}</span> */}
                    <span className="duration">{movie.release_date}</span>

                </div>
                <div className="description">{movie.overview}</div>
                <Link className="add"><FontAwesomeIcon icon={faPlus} />Watch List</Link>

            </div>
        </div>

    )
}