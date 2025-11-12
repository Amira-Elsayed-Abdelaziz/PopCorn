import { Outlet } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import SearchResult from "../components/SearchResult";
export default function SearchPage() {
    return (<>
        <Searchbar />
        <SearchResult />
        <Outlet/>
    </>)
}