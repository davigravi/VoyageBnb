import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookForm from './BookForm';
import './index.css';

function BookFormModal(id) {
  const [showModal, setShowModal] = useState(false);

  const hideForm = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className="book-button" onClick={() => setShowModal(true)}>Book</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookForm id={id} hideForm={hideForm} />
        </Modal>
      )}
    </>
  );
};

export default BookFormModal;
