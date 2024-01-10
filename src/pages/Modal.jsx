import React, { useEffect, useState } from 'react';
import '../sass/modal.scss';


const Modal = ({ modalItem ,close}) => {
  console.log(modalItem);

  return (
    <div>
      <div className="modal-overlay" key={modalItem.id}>
        <div className="modal-content">
          <img src={modalItem.image} alt="" />
          <h5>About: {modalItem.name} </h5>
          <p>Price: {modalItem.price}</p>
          <span onClick={close}>X</span>
        </div>
      </div>


    </div>
  )
}



export default Modal;

