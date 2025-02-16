import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './view/HomeView.jsx'
import PortfolioView from './view/PortfolioView.jsx'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default App
