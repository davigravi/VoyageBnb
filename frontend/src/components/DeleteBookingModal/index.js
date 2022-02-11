import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBooking from './DeleteBooking';
import './index.css'

function DeleteBookingModal(id) {
    const [showModal, setShowModal] = useState(false);

    const hideForm = () => {
      setShowModal(false)
    }

    return (
      <div className="delete-booking-button-container">
        <button className="delete-booking-button" onClick={() => setShowModal(true)}>Cancel Reservation</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <DeleteBooking id={id} hideForm={hideForm} />
          </Modal>
        )}
      </div>
    );
  };

  export default DeleteBookingModal;
