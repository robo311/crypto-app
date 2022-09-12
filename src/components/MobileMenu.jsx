import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"
import Switcher from './Switcher'
import "../helper/MobileMenu.css"

function MobileMenu() {
  return (
    <Menu right>
        <a href="">GDFGF</a>
        <Link to="/">Profile</Link>
        <Link to="/">Favorites</Link>
        <Switcher/>
        <Link to="/signin">Sign In</Link>
    </Menu>
  )
}

export default MobileMenu