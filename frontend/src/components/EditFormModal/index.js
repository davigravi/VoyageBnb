import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';
import './index.css';

function EditFormModal(id) {
  const [showModal, setShowModal] = useState(false);
  
  const hideForm = () => {
    setShowModal(false)
  }

  console.log(hideForm, "here is waht hideform lokos like")
  return (
    <>
      <button className="edit-button" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm id={id} hideForm={hideForm} />
        </Modal>
      )}
    </>
  );
};

export default EditFormModal;
