import React, { useState } from 'react';
import '../Style/caroussel.scss';
import data from '../data';

export default function ModalContent() {
  const [people, setPeople] = useState(data);
  const circle = 'circle';

  const [activeSlideId, setActiveSlideId] = useState(1);
  const [activeSlideIllustration, setActiveSlideIllustration] = useState(1);
  const [activeSlideBio, setActiveSlideBio] = useState(1);


  const handleSlideClick = (slideNumber, illustration, bio) => {
    setActiveSlideId(slideNumber);
    setActiveSlideIllustration(illustration);
    setActiveSlideBio(bio);
  };


  return (
    <div className='modal-inner'>
          <div className='geometry-box'>
            <div className='vertical-line'/>
            <div className='round-half'/>
            <div className='round'/>
          </div>
      <div className='circles-box'>
      
    
          {/* {people.map((person) => {
            const {membername, id, image, illustration, bio} = person;

            return (
              <div className={`circle ${circle + id}`} onClick={() => handleSlideClick(id, illustration, bio)}>
                 <div className='band-name'>
                  <h2>{membername}</h2>
                </div>
                <img className='image-member-circle' src={image} />
              </div>
            );
          })} */}

          {people.map((person) => {
            const {membername, id, image, illustration, bio} = person;

            return (
                <div className={`circle ${circle + id}`} onClick={() => handleSlideClick(id, illustration, bio)}>
                  <div className='band-name'>
                      <h2>{membername}</h2>
                  </div>
                  <div className="image-circle">
                      <img className='image-member-circle' src={image} alt={`Member: ${membername}`} />
                  </div>
                </div>
            );
          })}


      </div>

      <div className='plane-div'>
        <div className='top-div'>
        <img className='image-illustration' src={activeSlideIllustration || ''} />
        </div>
        <div className='bottom-div'>
          <p className='slide-bio'>{activeSlideBio || ''}</p>
        </div>

      </div>
    
    </div>
  )
}
