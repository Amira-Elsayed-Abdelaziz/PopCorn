import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm } from "@fortawesome/free-solid-svg-icons"
import MovieCard from "./MovieCard"
import React from "react"
import axios from "axios"
export default function SearchResult({ search }) {
    const [allMoviesId, setAllMoviesId] = React.useState([])
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU1YTllYmViMGI2OTUwNGYyMjUyNWQ4YjgzOTVlOCIsIm5iZiI6MTc0MzQ4ODA5Mi43Niwic3ViIjoiNjdlYjg0NWM5YmIyOTVkNmVhOGJlYTFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KeDdJMlpCXQkpBOerxX2pb_JkEKopR80fVwjEwHX9kc",
        },
    };

    React.useEffect(() => {
        // axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&page=1`, options)
        //     .then(data => setAllMovies(data.data.results))
        fetch(`http://www.omdbapi.com/?apikey=bbc3879d&s=${search}`)
            .then(res =>res.json())
            .then(data => setAllMoviesId(data.Search.map(ele => ele.imdbID)))
    }, [search])
    return (
        <section className="result">
            {!search ?
                (
                    <>
                        <span>
                            <FontAwesomeIcon icon={faFilm} />
                        </span>
                        <h2>Start exploring</h2> </>
                )
                :
                allMoviesId ? (
                    allMoviesId.map(ele => <MovieCard key={ele} id={ele} />)
                ) : (<h1>Loading</h1>)
            }
        </section>
    )
}