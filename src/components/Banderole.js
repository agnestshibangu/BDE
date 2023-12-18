
import React, { useState } from 'react';
import '../Style/banderole.scss';
import CustomModal from './Modal.js'

export default function Banderole() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (

    <div>    
        <div className='banderole-container'>
          <div class="container">

        <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
      
        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>

        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box"  onClick={openModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    
    
    

        </div>
      
        </div>
    </div>
  )
}
