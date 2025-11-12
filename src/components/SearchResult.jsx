import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm } from "@fortawesome/free-solid-svg-icons"
import React from "react"
export default function SearchResult({ search }) {
    React.useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=bbc3879d&s=${search}`).then(res => res.json()).then(data => console.log(data.Search))
    }, [search])

    return (
        <section className="result">
            {!search ? (<> <span>
                <FontAwesomeIcon icon={faFilm} />
            </span>
                <h2>Start exploring</h2> </>) : (<h2>there is movies</h2>)
            }
        </section>
    )
}