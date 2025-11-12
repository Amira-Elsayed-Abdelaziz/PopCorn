import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Searchbar() {
    return (
        <>
            <div class="searchbar">
                <span>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input placeholder="Search for a movie" />
                <button>Search</button>
            </div>
        </>
    )
}