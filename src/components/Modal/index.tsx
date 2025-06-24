import React, { useState } from 'react';
import './styles.module.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-overlay--hidden' : ''}`}>
      <div className="modal">
        <form className="modal__form">
          <h2 className="modal__title">Login/Register</h2>
          <label htmlFor="name" className="modal__label">Name:</label>
          <input type="text" id="name" name="name" className="modal__input" required />
          <label htmlFor="email" className="modal__label">Email:</label>
          <input type="email" id="email" name="email" className="modal__input" required />
          <label htmlFor="password" className="modal__label">Password:</label>
          <input type="password" id="password" name="password" className="modal__input" required />
          <div className="modal__buttons">
            <button type="submit" className="modal__button modal__button--primary">OK</button>
            <button type="button" className="modal__button modal__button--secondary modal__button--cancel" onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;