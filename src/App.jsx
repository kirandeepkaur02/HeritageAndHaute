import { Routes, Route } from 'react-router-dom'
import Index from "../src/Webpage/Index"

function App() {


  return (
   
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    
  )
}

export default App