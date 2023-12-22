import React from 'react'
import '../Style/caroussel.scss';

export default function ModalContent() {
  return (
    <div className='modal-inner'>
          <div className='geometry-box'>
            <div className='vertical-line'/>
            <div className='round-half'/>
            <div className='round'/>       
          </div>

          <div class="circle-container">
            <div class="circle">1</div>
            <div class="circle">2</div>
            <div class="circle">3</div>
            <div class="circle">4</div>
            <div class="circle">5</div>
            <div class="circle">6</div>
            <div class="circle">7</div>            
          </div>

          <div class="circle-container serie2">
            <div class="circle-serie2">1</div>
            <div class="circle-serie2">2</div>
            <div class="circle-serie2">3</div>
            <div class="circle-serie2">4</div>
            <div class="circle-serie2">5</div>
            <div class="circle-serie2">6</div>
            <div class="circle-serie2">7</div>            
          </div>
                  
    </div>
  )
}
