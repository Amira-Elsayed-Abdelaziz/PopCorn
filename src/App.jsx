import TopSection from './components/TopSection.jsx'
import WatchList from './components/WatchList.jsx'
import NotFound from './pages/NotFound.jsx'
import SearchPage from './pages/SearchPage.jsx'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopSection />}  >
          <Route index element={<SearchPage />} />
          <Route path="watchlist" element={<WatchList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
