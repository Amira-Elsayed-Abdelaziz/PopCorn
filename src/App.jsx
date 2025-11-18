import TopSection from './components/TopSection.jsx'
import WatchList from './components/WatchList.jsx'
import NotFound from './pages/NotFound.jsx'
import SearchPage from './pages/SearchPage.jsx'
import { Route, Routes } from 'react-router-dom'
import { WatchListProvider } from './contexts/WatchListProvider.jsx'
import "./App.css"
export default function App() {
  return (
    <WatchListProvider>
      <Routes>
        <Route path="/" element={<TopSection />}  >
          <Route index element={<SearchPage />} />
          <Route path="watchlist" element={<WatchList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WatchListProvider>
  )
}

