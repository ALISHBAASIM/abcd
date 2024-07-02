import React from 'react'
import arrow_icon from "../../assets/arrow-icon.png"
import multi_device_img from "../../assets/multi-device-img.png"
import cup_image from "../../assets/tea-cup-img.png"
const Group_5 = () => {
  return (
    <div className='group-5'>
      <div  className='group-5-left'>
      <span style={{fontWeight:"700",fontSize:"16px",color:"#252525"}}>Invest From Any Device</span><br /><br />
                <h2><span style={{color:"#E11F1C"}}>Integer rhoncus,</span> ligula at</h2>
                <h2> hendrerit <span style={{color:"#E11F1C"}}>volutpat,</span> nulla massa</h2>

                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus id orci efficitur fermentum. Ut vitae tincidunt ex. Sed eu bibendum mi.
                         Vestibulum lutpat, nulla massa convallis odio, vitae cursus libero augue in elit.</p>
                <p>Nunc accumsan scelerisque velit, in condimentum velit pellentesque a. Vestib euismod. Sed tincidunt, 
                    nulla id auctor laoreet, purus nisl posuere purus, nec sollicitudin quam tortor id lacus.</p>
                
                    <button style={{marginTop:"30px"}} className="black-button">
          <span style={{color:"#FFFFFF"}}>Invest now</span>
           <img  src={arrow_icon} alt="" />
           </button>
      </div>

      <div className='group-5-right'>
            <img src={multi_device_img} alt="" />
            <img className='cup-img' src={cup_image} alt="" />
      </div>
    </div>
  )
}

export default Group_5
