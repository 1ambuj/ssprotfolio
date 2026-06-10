import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/site/Layout'
import { BlogPost } from './pages/BlogPost'
import { BlogsPage } from './pages/BlogsPage'
import { HandbookPost } from './pages/HandbookPost'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/handbook/:slug" element={<HandbookPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
