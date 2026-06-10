import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/site/Layout'
import { BlogPost } from './pages/BlogPost'
import { HandbookPost } from './pages/HandbookPost'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/handbook/:slug" element={<HandbookPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
