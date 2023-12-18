// Modal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility

const CustomModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <h2>Hello Modal</h2>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default CustomModal;
