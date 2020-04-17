import React from "react";
import Modal from "./Modal";
import "./styles/DeleteBadgeModal.css";

function DeleteBadgeModal(props) {
  return (
    <Modal modalIsOpen={props.modalIsOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p> You are about to delete this badge.</p>
      </div>
      <div>
        <button className="btn btn-danger mr-4" onClick={props.onDeleteBadge}>
          Delete
        </button>
        <button onClick={props.onClose} className="btn btn-primary">
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
