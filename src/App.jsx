import { Routes, Route } from 'react-router-dom'
import Index from "../src/Webpage/Index"
import Products from './pages/Products'
import BooKPage from './pages/BookPage'
import BookPage from './pages/BookPage'
import About from './pages/About'
function App() {

 return (
   
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Products" element ={<Products/>} />
        <Route path="/BookPage" element={<BookPage />} />
        <Route path ="/about" element ={<About />} />
      </Routes>
    
  )
}
export default App