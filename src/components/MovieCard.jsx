import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons"
import { WatchListContext } from "../App"
import React from "react"
export default function MovieCard({ id }) {
    const [movie, setMovie] = React.useState({})
    const { watchList, setWatchList } = React.useContext(WatchListContext)
    React.useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=bbc3879d&i=${id}`)
            .then(res => res.json())
            .then(data => setMovie({ ...data, Runtime: data.Runtime.split(" ").join("") }))

    }, [])
    function addToWatchList() {
        setWatchList(prev => [...prev, movie])
    }
    return (
        <div className="movie-card">
            <div className="card-poster">
                <img className="poster" src={movie.Poster} />

            </div>
            <div className="card-details">
                <div>
                    <h4>{movie.Title}</h4>
                    <span className="rate">
                        <FontAwesomeIcon icon={faStar} />{movie.imdbRating}
                    </span>

                </div>
                <div>
                    <span className="type">{movie.Genre}</span>
                    <span className="duration">{movie.Runtime}</span>

                </div>
                <div className="description">{movie.Plot}</div>
                <div className="add-btn">
                    <FontAwesomeIcon icon={faPlus} /><button onClick={addToWatchList}>Watch List</button>
                </div>
            </div>
        </div>

    )
}