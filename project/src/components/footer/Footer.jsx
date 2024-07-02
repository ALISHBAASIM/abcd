import React from 'react'
import logo from "../../assets/logo.png"
import fb_icon from "../../assets/footer-icon-fb.png"
import insta_icon from "../../assets/footer-icon-insta.png"
import youtube_icon from "../../assets/footer-icon-youtube.png"


const Footer = () => {
  return (
    <div className='footer'>
    
        
            <div className='footer-left'>
                <div className='footr-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='footer-left-txt'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </div>
                <div className='footer-social-icons'>
                    <img src={fb_icon} alt="" />
                    <img src={insta_icon} alt="" />
                    <img src={youtube_icon} alt="" />
                </div>
            </div>

        <div style={{marginLeft:"60px"}} className='footer-center'>
            <div className='footer-center-content'>
            <h4>QUICK MENU</h4>

                <a style={{marginTop:"20px",color:"#E11F1C"}} href="">Home</a>
                <a href="">About</a>
                <a href="">Investors</a>
                <a href="">Contact</a>
                <a href="">Terms & condition</a>
                <a href="">Privacy & Policy</a>
                <br /><br /><br />
                    <p>JTC. 2024. All rights reserved</p>
            </div>
            </div>

            <div className='footer-right'>
                <h4>CONTACT</h4>
                <div className='footer-right-content'>
                    <h6>Email Address</h6>
                    <p>lorem@gmail.com</p>
                </div>

                <div className='footer-right-content'>
                    <h6>Phone No</h6>
                    <p>+123 (456789)</p>
                </div>

                <div className='footer-right-content'>
                    <h6>Office Address</h6>
                    <p style={{textDecoration:"none"}}>3 Madison Street NY, USA</p>
                </div>

            </div>
        
     
    </div>
  )
}

export default Footer
