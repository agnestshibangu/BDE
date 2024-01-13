import React, { useState } from 'react';
import '../Style/caroussel.scss';
import data from '../data';

export default function ModalContent() {
  const [people, setPeople] = useState(data);
  const circle = 'circle';

  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideClick = (slideNumber) => {
    console.log("hello");
    console.log('Clicked on slide', slideNumber);
    setActiveSlide(slideNumber);
  };


  return (
    <div className='modal-inner'>
          <div className='geometry-box'>
            <div className='vertical-line'/>
            <div className='round-half'/>
            <div className='round'/>
          </div>
      <div className='circles-box'>
      
    
          {people.map((person) => {
            const {membername, id, image} = person;

            return (
              <div className={`circle ${circle + id}`} onClick={() => handleSlideClick(id)}>
                 <div className='band-name'>
                  <h2>{membername}</h2>
                </div>
                <img className='image-member-circle' src={image} />
              </div>
            );
          })}

      </div>

      <div className='plane-div'>
        <div className='top-div'>
        </div>
        <div className='bottom-div'>
          <p className='slidep'>{activeSlide}</p>
        </div>

      </div>
      

    </div>
  )
}
