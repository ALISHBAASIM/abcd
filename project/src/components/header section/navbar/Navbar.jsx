import React from 'react'
import logo from "../../../assets/logo.png"
import outline_map from "../../../assets/outline-map.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-img'>
            <img src={logo} alt="" />
        </div>

        <div className='navbar-list'>
            
                <ul className='nav-menu'>
                    <li style={{color:"#E11F1C",borderBottom:"2px solid #E11F1C",paddingBottom:"5px"}}>Home</li>
                    <li>About</li>
                    <li>Investors</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
            
        </div>
      
      <div className='map-icon'>
            <img src={outline_map} alt="" />
      </div>

      <div className='login-button'>
            <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
