import { Outlet } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import SearchResult from "../components/SearchResult";
import React from "react";
export default function SearchPage() {
    const [search, setSearch] = React.useState("")

    return (<>
        <Searchbar search={search} setSearch={setSearch} />
        <SearchResult search={search} />
        <Outlet/>
    </>)
}