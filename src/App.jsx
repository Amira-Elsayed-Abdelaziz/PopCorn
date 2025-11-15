import TopSection from './components/TopSection.jsx'
import WatchList from './components/WatchList.jsx'
import NotFound from './pages/NotFound.jsx'
import SearchPage from './pages/SearchPage.jsx'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import "./App.css"
const WatchListContext = React.createContext()
function App() {
  const [watchList, setWatchList] = React.useState([])

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      <Routes>
        <Route path="/" element={<TopSection />}  >
          <Route index element={<SearchPage />} />
          <Route path="watchlist" element={<WatchList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WatchListContext.Provider>
  )
}

export { App ,WatchListContext}
