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
      <div className='circles-box'>
        <div className="circle"></div>
        <div className="circle2 circle"></div>
        <div className="circle3 circle"></div> 
        <div className="circle4 circle"></div>
        <div className="circle5 circle"></div>
        <div className="circle6 circle"></div> 
        <div className="circle7 circle"></div>
        <div className="circle8 circle"></div>
      </div>    

      <div className='plane-div'>
        
      </div>
      
      {/* <div className="circle5"></div>
      <div className="circle6"></div>
      <div className="circle7"></div>  */}




    </div>
  )
}
