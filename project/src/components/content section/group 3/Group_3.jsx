import React from 'react'
import black_arr from '../../../assets/black-arrow.png'
import image from "../../../assets/group-3-main-image.png"
const Group_3 = () => {
  return (
    <div className='group-3'>
        <div className='group-3-left'>
        <div className='left-content-text'>
                <span style={{color:"#ffffff",fontSize:"16px",fontWeight:"700"}}>Our Shops</span><br /><br />
                <h2><span style={{color:"#E11F1C"}}>Ullamcorper</span> malesuada eu amet </h2>
                <h2> nunc. Tempor faucibus <span style={{color:"#E11F1C"}}> felis risus.</span></h2>

                
                <div className='group-3-para-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus id orci efficitur fermentum. Ut vitae tincidunt ex. Sed eu bibendum mi.
                         Vestibulum lutpat, nulla massa convallis odio, vitae cursus libero augue in elit.</p>
                <p>Nunc accumsan scelerisque velit, in condimentum velit pellentesque a. Vestib euismod. Sed tincidunt, 
                    nulla id auctor laoreet, purus nisl posuere purus, nec sollicitudin quam tortor id lacus.</p>
                </div>
                
                <div className='sub-content'>
                   <div>
                   <h4>201K</h4>
                    <p>Lorem ipsum</p>
                   </div>

                   <div>
                   <h4>100+</h4>
                    <p>Lorem ipsum</p>
                   </div>

                   <div>
                   <h4>10%</h4>
                    <p>Lorem ipsum</p>
                   </div>

                   <div>
                   <h4>1000+</h4>
                    <p>Lorem ipsum</p>
                   </div>
                </div>

                    <button style={{backgroundColor:"#FFFFFF",marginTop:"30px"}}  className="black-button">
          <span  style={{color:"#252525"}}>Invest now</span>
           <img style={{color:"#252525"}} src={black_arr} alt="" />
           </button>
            </div>
        </div>

        <div className='group-3-right'>
        <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Group_3
