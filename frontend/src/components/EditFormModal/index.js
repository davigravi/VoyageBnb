import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';
import './index.css';

function EditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-button" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm />
        </Modal>
      )}
    </>
  );
};

export default EditFormModal;
