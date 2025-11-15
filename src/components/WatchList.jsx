import React from "react"
import { WatchListContext } from "../App"
export default function WatchList() {
    const {watchList, setWatchList} = React.useContext(WatchListContext)
    console.log(watchList)
    return (<h1> WatchList</h1>)
}