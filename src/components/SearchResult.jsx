import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm } from "@fortawesome/free-solid-svg-icons"
import MovieCard from "./MovieCard"
import React from "react"
import MovieData from "./MovieData"

export default function SearchResult({ search }) {
    const [allMoviesId, setAllMoviesId] = React.useState([])
    React.useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=bbc3879d&s=${search}`)
            .then(res => res.json())
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
                    allMoviesId.map(ele => <MovieData key={ele} id={ele} />)
                ) : (<h1>Loading</h1>)
            }
        </section>
    )
}