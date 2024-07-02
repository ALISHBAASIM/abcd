import React from 'react'
import image from "../../assets/rotate-line-img.png"
const Group_7 = () => {
  return (
    <div className='group-7'>
      <div className='group-7-left'>
        <h2 >Calculate Your Cost</h2>

        <div className='currency-part'>
            <h5>Currency:</h5>
            <select>
                <option value="MXN">MXN</option>
            </select>
        </div>

        <div className='money-part'>
            <h4>How much money:</h4>
            <div className='line'>
                <div className='line-2'> 
                </div>
            </div>
                <img src={image} alt="" />

                <div className='price'>
                    <p>$5000</p>
                    <p>$1000000</p>
                </div>
        </div>

        <div className='cost'>
            $15000
        </div>

        <div className='year-part'>
            <p>Years:</p>
            <select>
                <option value="1 year">1 Year</option>
            </select>
        </div>

        <div className='guarantee-btn'>
           <button>Java Times Guarantee</button>
        </div>

      </div>

      <div className='group-7-right'>
            <p>Result</p>

            <div className='investment-part'>
                <p>Year Of Investment:</p>
                <p>Year 01</p>
            </div>

            <div className='investment-part'>
                <p>Investment:</p>
                <p>$70000</p>
            </div>

            <div className='investment-part'>
                <p>Share Price:</p>
                <p>$20</p>
            </div>

            <div className='investment-part'>
                <p>Investor Shares:</p>
                <p>175</p>
            </div>

            <div className='investment-part'>
                <p>Profit:</p>
                <p>$600</p>
            </div>

            <div className='investment-part'>
                <p>Participant:</p>
                <p>$3500</p>
            </div>

            <div className='investment-part'>
                <p>Exit:</p>
                <p>$4100</p>
            </div>


            <div className='last-part'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed ac risus id orci efficitur fermentum. Ut vitae tincidunt ex.
                  Sed eu bibendum mi. Vestibulum lutpat.</div>
      </div>
    </div>
  )
}

export default Group_7
