import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/site/Layout'
import { BlogsPage } from './pages/BlogsPage'
import { HandbookConfirmPage } from './pages/HandbookConfirmPage'
import { HandbookPost } from './pages/HandbookPost'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/handbook/:slug" element={<HandbookPost />} />
          <Route path="/handbooks/confirm" element={<HandbookConfirmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
