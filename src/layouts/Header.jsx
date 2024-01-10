import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../sass/header.scss'
import { BasketContext } from '../context/BasketContext'


const Header = () => {

  const {basket} = useContext(BasketContext)


  return (
    <div className='header'>

      <h1>Exclusive</h1>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/sign'>Sign Up</NavLink>
      </ul>
      <div className='icon'>
        <div className="input">
          <input type="text" placeholder='What are you looking for ?' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <NavLink to='/wishlist'><i class="fa-regular fa-heart"></i></NavLink>
        <NavLink to='/basket'><i class="fa-solid fa-cart-shopping"></i><sup>
          {basket.length ? basket.length : "0"}</sup></NavLink>
      </div>
    </div>
  )
}

export default Header
