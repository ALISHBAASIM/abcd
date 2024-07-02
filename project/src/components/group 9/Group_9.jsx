import React from 'react'
import img1 from "../../assets/group-9-img-1.png"
import img2 from "../../assets/group-9-img-2.png"
import img3 from "../../assets/group-9-img-3.png"
import img4 from "../../assets/group-9-img-4.png"
import fb_icon from "../../assets/social-icon-fb.png"
import twitter_icon from "../../assets/social-icon-twit.png"
import linkdin_icon from "../../assets/social-icon-linkdin.png"
const Group_9 = () => {
  return (
    <div className='group-9'>
      <p>Our Team</p>

      <h2><span style={{color:"#E11F1C"}}>Ullamcorper</span> malesuada eu amet</h2>
       <h2>nunc. Tempor faucibus <span style={{color:"#E11F1C"}}>felis risus.</span></h2>

       <div className='group-9-carts'>
            <div className='group-9-cart-1'>
                <img src={img1} alt="" />
                <h4>Name Here</h4>
                <p>Designation</p>

                <div className='social-icons'>
                    <img src={linkdin_icon} alt="" />
                    <img src={fb_icon} alt="" />
                    <img src={twitter_icon } alt="" />
                </div>
                <div className='group-9-cart-text'>
                    <p>Lorem ipsum dolor sit amet consectetur.
                         Eget ut mauris varius elementum dui sed suspendisse et. Risus egestas velit</p>
                </div>
            </div>

            <div className='group-9-cart-1'>
                <img src={img2} alt="" />
                <h4>Name Here</h4>
                <p>Designation</p>

                <div className='social-icons'>
                    <img src={linkdin_icon} alt="" />
                    <img src={fb_icon} alt="" />
                    <img src={twitter_icon } alt="" />
                </div>
                <div className='group-9-cart-text'>
                    <p>Lorem ipsum dolor sit amet consectetur.
                         Eget ut mauris varius elementum dui sed suspendisse et. Risus egestas velit</p>
                </div>
            </div>

            <div className='group-9-cart-1'>
                <img src={img3} alt="" />
                <h4>Name Here</h4>
                <p>Designation</p>

                <div className='social-icons'>
                    <img src={linkdin_icon} alt="" />
                    <img src={fb_icon} alt="" />
                    <img src={twitter_icon } alt="" />
                </div>
                <div className='group-9-cart-text'>
                    <p>Lorem ipsum dolor sit amet consectetur.
                         Eget ut mauris varius elementum dui sed suspendisse et. Risus egestas velit</p>
                </div>
            </div>

            <div className='group-9-cart-1'>
                <img src={img4} alt="" />
                <h4>Name Here</h4>
                <p>Designation</p>

                <div className='social-icons'>
                    <img src={linkdin_icon} alt="" />
                    <img src={fb_icon} alt="" />
                    <img src={twitter_icon } alt="" />
                </div>
                <div className='group-9-cart-text'>
                    <p>Lorem ipsum dolor sit amet consectetur.
                         Eget ut mauris varius elementum dui sed suspendisse et. Risus egestas velit</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Group_9
