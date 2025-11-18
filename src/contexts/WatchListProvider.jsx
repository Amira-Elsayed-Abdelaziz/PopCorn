import React from 'react'

const WatchListContext = React.createContext()

function WatchListProvider({ children }) {
    const [watchList, setWatchList] = React.useState([])

    return (
        <WatchListContext.Provider value={{ watchList, setWatchList }}>
            {children}
        </WatchListContext.Provider>
    )
}

export { WatchListContext, WatchListProvider }