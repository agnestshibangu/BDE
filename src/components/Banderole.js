import React, { useState } from "react";
import '../Style/banderole.scss';
import ModalCont from "./ModalCont";


export default function Banderole() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }


    return (

   
    <div>
        
    
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <ModalCont />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

        <div className='banderole-container'>
          <div class="container">

      
        <div class="box" onClick={toggleModal}>
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>

        <div class="box">
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box">
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box">
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box">
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box">
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box">
            <div class="image-overlay">
                <div class="img-title">view profile</div>
            </div>
            <div class="box-inner"></div>
        </div>
    

        <div class="box">
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
