import React from 'react'
import "../../App.css"
import Navbar from './navbar/Navbar'
import Heroic_section from './heroic section/Heroic_section'
const Header = () => {
  return (
    <div className='header'>
      <Navbar/>
      <Heroic_section/>
    </div>
  )
}

export default Header
