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
          <div className="container">

      
        <div className="box" onClick={toggleModal}>
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>

        <div className="box">
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>
    

        <div className="box">
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>
    

        <div className="box">
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>
    
        <div className="box">
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>
          
        <div className="box">
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>
    
       
        <div className="box">
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>
    
        <div className="box">
            <div className="image-overlay">
                <div className="img-title">view profile</div>
            </div>
            <div className="box-inner"></div>
        </div>
    
    

    

        </div>
      
        </div>

      
    </div>
  )
}
