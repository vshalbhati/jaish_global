import React from 'react'
import Homepage from './Homepage/Homepage'
import About from './AboutUs/About';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Homepage/Header';
import Services from './Services/Services';
function Routing() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  )
}

export default Routing