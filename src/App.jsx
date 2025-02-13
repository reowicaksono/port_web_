import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './view/HomeView.jsx'
import PortfolioView from './view/PortfolioView.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default App
