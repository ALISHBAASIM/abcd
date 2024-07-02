import React from 'react'
import img from "../../assets/group-8-img.png"
import cart_1_img from "../../assets/group-8-cart-img.png"
const Group_8 = () => {
  return (
    <div className='group-8'>
      <div className='img-container'>
        <img src={img} alt="" />
      </div>

      <div className='group-8-right-container'>
        <p>Testimonials</p>
        <h2><span style={{color:"#E11F1C"}}>Ullamcorper</span> malesuada eu amet</h2>
       <h2>nunc. Tempor faucibus <span style={{color:"#E11F1C"}}>felis risus.</span></h2>

       <div className='group-8-carts'>
            <div className='group-8-cart-1'>
                <div className='cart-1-main-content'>
                    <img src={cart_1_img} alt="" />
                    <div style={{marginTop:"20px"}}>
                        <h4>John Adam</h4>
                        <p>Designation</p>
                    </div>
                </div>

                <div className='group-8-sub-content'>
                Lorem ipsum dolor sit amet consectetur. Eget ut mauris varius elementum dui sed suspendisse et. Risus egestas velit nam sem neque magna adipiscing. Leo neque id aenean tellus sed.
                 Praesent fermentum dignissim sed ipsum ullamcorper fringilla massa. Urna sed nunc quam consequat.
                </div>
            </div>

            <div className='group-8-cart-2'>
                <p>Lorem ipsum dolor sit amet consectetur. Eget ut mauris varius elementum dui sed suspendisse et. Risus egestas velit nam sem neque magna adipiscing. Leo neque id aenean tellus sed.
                     Praesent fermentum dignissim sed ipsum ullamcorper fringilla massa. Urna sed nunc quam consequat.</p>
            
            </div>
       </div>
      
       
      </div>
      
    </div>
  )
}

export default Group_8
