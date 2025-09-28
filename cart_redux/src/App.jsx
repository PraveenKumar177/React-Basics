
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
// Components 
import Header from './components/Header'
import Home from './components/Home'
import ViewCart from './components/ViewCart'

function App() {
  return (
    <>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/home' element={<Home />}  ></Route>
              <Route path='/viewcart' element={<ViewCart />} ></Route>
            </Routes>
          </div>
        </Router>
      
    </>
  )
}

export default App
