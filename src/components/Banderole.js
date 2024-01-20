import React, { useState } from "react";
import '../Style/banderole.scss';
import ModalCont from "./ModalCont";
import { IoMdClose } from "react-icons/io";
import data from '../data';

// ... (previous imports and code)

export default function Banderole() {
    const [people, setPeople] = useState(data);
    const [modal, setModal] = useState(false);
    const [selectedPersonId, setSelectedPersonId] = useState(null);
  
    const toggleModal = (id) => {
      setModal(!modal);
      setSelectedPersonId(id);
    };
  
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  
    return (
      <div>
        {modal && (
          <div className="modal">
            <div onClick={() => toggleModal(null)} className="overlay"></div>
            <div className="modal-content">
              <ModalCont itemId={selectedPersonId} />
              <button className="close-modal" onClick={() => toggleModal()}>
                <IoMdClose className="close-icon" />
              </button>
            </div>
          </div>
        )}
  
        <div className='banderole-container'>
          <div className="container">
            {people.map((person) => {
              const { membername, id, image, illustration, bio, login} = person;
  
              return (
                <div className="box" onClick={() => toggleModal(id)}>
                  <div className="image-overlay">
                    <div className="img-title">{login}</div>
                  </div>
                  <img className="box-inner" src={image} alt={membername} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  