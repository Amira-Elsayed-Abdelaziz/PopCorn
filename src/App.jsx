import TopSection from './components/TopSection.jsx'
import WatchList from './components/WatchList.jsx'
import SearchResult from './components/SearchResult.jsx'
import NotFound from './pages/NotFound.jsx'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopSection />} >
          <Route path="watchlist" element={<WatchList />} />
          <Route path="searchresult" element={<SearchResult />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
