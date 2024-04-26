import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home/Home'
import Success from './Pages/Success/Success'
import NotFound from './Pages/NotFound/NotFound'
import About from './Pages/About/About'
import OurMenu from './Pages/OurMenu/OurMenu'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ourmenu" element={<OurMenu/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App