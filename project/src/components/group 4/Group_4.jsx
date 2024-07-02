import React from 'react'
import heart_img from "../../assets/heart-img.png"
const Group_4 = () => {
  return (
    <div className='group-4'>
        <p>Our benefits</p>

       <div className='group-4-head'>
                <h2><span style={{color:"#E11F1C"}}>Ullamcorper</span> malesuada eu amet </h2>
                <h2> nunc. Tempor faucibus <span style={{color:"#E11F1C"}}> felis risus.</span></h2>
       </div>

       <div className='main-group-4-content'>
       <div className='group-4-left'>
            <div className='group-4-cart-1'>
                <div className='group-4-cart-1-header'>
                    <h4>Lorem Ipsum</h4>
                    <p>1</p>
                </div>

                <div className='group-4-cart-1-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p style={{marginLeft:"180px",marginTop:"-2px"}}>adipiscing elit. S</p>
                </div>
            </div>

            <div style={{marginTop:"50px",marginLeft:"151px"}} className='group-4-cart-1'>
                <div className='group-4-cart-1-header'>
                    <h4>Lorem Ipsum</h4>
                    <p>3</p>
                </div>

                <div className='group-4-cart-1-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p style={{marginLeft:"180px",marginTop:"-2px"}}>adipiscing elit. S</p>
                </div>
            </div>

            <div style={{marginTop:"50px",marginLeft:"189px"}} className='group-4-cart-1'>
                <div className='group-4-cart-1-header'>
                    <h4>Lorem Ipsum</h4>
                    <p>5</p>
                </div>

                <div className='group-4-cart-1-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p style={{marginLeft:"180px",marginTop:"-2px"}}>adipiscing elit. S</p>
                </div>
            </div>
       </div>

       <div className='group-4-center'>
            <div className='center-img'>
                <img src={heart_img} alt="" />
            </div>
       </div>

       <div className='group-4-right'>
       <div className='group-4-right-cart-1'>
                <div className='group-4-right-cart-1-header'>
                    <p>2</p>
                    <h4>Lorem Ipsum</h4>
                </div>

                <div className='group-4-right-cart-1-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p style={{marginLeft:"180px",marginTop:"-2px"}}>adipiscing elit. S</p>
                </div>
            </div>

            <div style={{marginTop:"50px",marginLeft:"-30px"}} className='group-4-right-cart-1'>
                <div className='group-4-right-cart-1-header'>
                    <p>4</p>
                    <h4>Lorem Ipsum</h4>
                </div>

                <div className='group-4-right-cart-1-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p style={{marginLeft:"180px",marginTop:"-2px"}}>adipiscing elit. S</p>
                </div>
            </div>

            <div style={{marginTop:"50px",marginLeft:"-70px"}} className='group-4-right-cart-1'>
                <div className='group-4-right-cart-1-header'>
                    <p>6</p>
                    <h4>Lorem Ipsum</h4>
                </div>

                <div className='group-4-right-cart-1-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p style={{marginLeft:"180px",marginTop:"-2px"}}>adipiscing elit. S</p>
                </div>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Group_4
