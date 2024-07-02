import React from 'react'
import arrow_icon from "../../../assets/arrow-icon.png"
import call_icon from "../../../assets/call-icon.png"
const Heroic_section = () => {
  return (
    <div className='heroic-section'>
      <div className='head-text'>
        <h1>Transform your <span>Future</span> </h1>
        <h1>with a <span>Safe Investment.</span></h1>
      </div>
      <div className='para-text'>
        <p> Ac congue dapibus aliquet nec ultrices non magna. Magnis cras tortor dolor est </p>
        <p>varius. Ut neque nec venenatis blandit elit ullamcorper. Mauris</p>
      </div>

      <div className='button-container'>
       
        <button  className="black-button">
          <span>Invest now</span>
           <img  src={arrow_icon} alt="" />
           </button>

           <button className='book-button'>
              <img src={call_icon} alt="" />
              <span>Book Consultation</span>
           </button>
      </div>
    </div>
  )
}

export default Heroic_section
