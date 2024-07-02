import React from 'react'
import img_1 from "../../../assets/group1-img1.png"
import img_2 from "../../../assets/group1-img2.png"
import img_3 from "../../../assets/group1-img3.png"
const Group_1 = () => {
  return (
    <div className='group-cart'>
      <div className='cart-1'>
      <div className='cart-1-img'>
        <img src={img_1} alt="" />
      </div>
      <div className='cart-1-props'>
            <span className='img-1-name'>Josephine Brooks</span>
            <p style={{fontSize:"12px",fontWeight:"400",marginTop:"5px"}}>United States</p>
            <p style={{fontSize:"12px",fontWeight:"700",marginTop:"5px"}}>Invested in Java Times Caffe #2 Vinedos</p>
            <div className='cart-1-price'>
                <span>$1300</span>
                <p>5 days ago</p>
            </div>
      </div>
      </div>

        {/* cart-02 */}

        <div className='cart-2'>
      <div className='cart-2-img'>
        <img src={img_2} alt="" />
      </div>
      <div className='cart-2-props'>
            <span className='img-2-name'>Josephine Brooks</span>
            <p style={{fontSize:"12px",fontWeight:"400",marginTop:"5px",color:"#FFFFFF"}}>United States</p>
            <p style={{fontSize:"12px",fontWeight:"700",marginTop:"5px",color:"#FFFFFF"}}>Invested in Java Times Caffe #2 Vinedos</p>
            <div className='cart-2-price'>
                <span>$1300</span>
                <p>5 days ago</p>
            </div>
      </div>
      </div>
      



        {/* cart-03 */}
        <div className='cart-1'>
      <div className='cart-1-img'>
        <img src={img_3} alt="" />
      </div>
      <div className='cart-1-props'>
            <span className='img-1-name'>Josephine Brooks</span>
            <p style={{fontSize:"12px",fontWeight:"400",marginTop:"5px"}}>United States</p>
            <p style={{fontSize:"12px",fontWeight:"700",marginTop:"5px"}}>Invested in Java Times Caffe #2 Vinedos</p>
            <div className='cart-1-price'>
                <span>$1300</span>
                <p>5 days ago</p>
            </div>
      </div>
      </div>

    </div>
  )
}

export default Group_1
