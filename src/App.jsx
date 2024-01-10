import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Sign from './pages/Sign'
import Modal from './pages/Modal'
import MainLayout from './MainLayout'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:detail' element={<Modal />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/sign' element={<Sign />}></Route>
          <Route path='/basket' element={<Basket/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>

        </Routes>
        <Footer />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
