import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './compo/Home'
import Header from './compo/Header'
import Pdf from './compo/Pdf'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/pdf' element={<Pdf/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

