import React from 'react'
import main_img from "../../assets/grou-6-main-img.png"
import side_image from "../../assets/side-image.png"
import side_right_image from "../../assets/side-right-img.png"
const Group_6 = () => {
  return (
    <div className='group-6'>
       <h4>Our inauguration</h4>
       <br />
       <h2><span style={{color:"#E11F1C"}}>Ullamcorper</span> malesuada eu amet</h2>
       <h2>nunc. Tempor faucibus <span style={{color:"#E11F1C"}}>felis risus.</span></h2> 

       <div className='main-content'>
        <img className='side-left-img' src={side_image} alt="" />
            <img className='main-img' src={main_img} alt="" />
            <img className='side-right-img' src={side_right_image} alt="" />
       </div>
    </div>
  )
}

export default Group_6
