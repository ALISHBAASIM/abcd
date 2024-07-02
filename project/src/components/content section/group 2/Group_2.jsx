import React from 'react'
import rectangle from "../../../assets/Rectangle.png"
import rectangle_img from "../../../assets/Rectangle img.png"
import ellipse from "../../../assets/Ellipse.png"
import arrow_icon from "../../../assets/arrow-icon.png"
const Group_2 = () => {
  return (
    <div className='group-2'>
        <div className='left-content'>
         
          <img className='rectangle-image' src={rectangle} alt="" />
            <img className="overlay-image" src={rectangle_img} alt="" />
          <p>Lorem ipsum</p>

            <img style={{marginTop:"-100px",marginLeft:"100px",position:"absolute"}} src={ellipse} alt="" /> <br />
            <img style={{marginTop:"10px",marginLeft:"140px",position:"absolute"}}  className='ellipse' src={ellipse} alt="" />
            <img style={{marginTop:"-140px",marginLeft:"250px",position:"absolute"}}  className='ellipse' src={ellipse} alt="" />
            <img style={{marginTop:"-110px",marginLeft:"570px",position:"absolute"}} className='ellipse' src={ellipse} alt="" />
            <img style={{marginTop:"-55px",marginLeft:"430px",position:"absolute"}} className='ellipse' src={ellipse} alt="" />
            <img style={{marginTop:"10px",marginLeft:"510px",position:"absolute"}} className='ellipse' src={ellipse} alt="" />
            <img style={{marginTop:"60px",marginLeft:"330px",position:"absolute"}}  className='ellipse' src={ellipse} alt="" />
            <img style={{marginTop:"140px",marginLeft:"590px",position:"absolute"}} className='ellipse' src={ellipse} alt="" />
            <img style={{marginTop:"110px",marginLeft:"200px",position:"absolute"}} className='ellipse' src={ellipse} alt="" />
        </div>

        <div className='right-content'>
            <div className='right-content-text'>
                <span>Our Shops</span><br /><br />
                <h2><span>Integer rhoncus,</span> ligula at</h2>
                <h2> hendrerit <span>volutpat,</span> nulla massa</h2>

                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus id orci efficitur fermentum. Ut vitae tincidunt ex. Sed eu bibendum mi.
                         Vestibulum lutpat, nulla massa convallis odio, vitae cursus libero augue in elit.</p>
                <p>Nunc accumsan scelerisque velit, in condimentum velit pellentesque a. Vestib euismod. Sed tincidunt, 
                    nulla id auctor laoreet, purus nisl posuere purus, nec sollicitudin quam tortor id lacus.</p>
                
                    <button  className="black-button">
          <span style={{color:"#FFFFFF"}}>Invest now</span>
           <img  src={arrow_icon} alt="" />
           </button>
            </div>
        </div>
    </div>
  )
}

export default Group_2
