import React, { useState, useEffect } from 'react';
import '../Style/caroussel.scss';
import data from '../data';

export default function ModalContent({ itemId }) {
  const [people, setPeople] = useState(data);
  const card = 'card';

  const [activeSlideIllustration, setActiveSlideIllustration] = useState('');

  useEffect(() => {
    // Update activeSlideIllustration when itemId changes
    const selectedPerson = people.find(person => person.id === itemId);
    setActiveSlideIllustration(selectedPerson ? selectedPerson.illustration : '');
  }, [itemId, people]);

  const [activeSlideBio, setActiveSlideBio] = useState('');

  const handleSlideClick = (illustration, bio) => {
    setActiveSlideIllustration(illustration);
    setActiveSlideBio(bio);
  };

  return (
    <div>
      <div className="void" id="void">
        <div className="crop">
          <div className="overlay">
            <div className='top-div'>
              <img className='image-illustration' src={activeSlideIllustration || ''} alt={`Illustration for ID: ${itemId}`} />
            </div>
            <div className='bottom-div'>
              <p className='slide-bio'>{activeSlideBio || ''}</p>
            </div>
          </div>

          <ul id="card-list" style={{ '--count': 8, display: 'flex', justifyContent: 'space-around' }}>
            {people.map((person) => {
              const { membername, id, image, illustration, bio } = person;

              return (
                <li key={id}>
                  <div className="card" onClick={() => handleSlideClick(illustration, bio)}>
                    <img className='image-member' src={image} alt={`Member: ${membername}`} />
                    <span className="model-name">{membername}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>
        <div className="mask"></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
}
