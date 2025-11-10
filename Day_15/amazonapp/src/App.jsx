import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Cart from './Components/Cart'


const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/product" element={<Body/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App