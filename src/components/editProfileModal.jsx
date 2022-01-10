import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/editProfileModal.css";

const EditProfileModal = (props) => {
  return (
    <div className="modalContainer">
      <Modal
        // backdrop="static"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="modalContainer">
          <h4>Selamat Datang di AutoViral</h4>
          <p>Sebelum mulai, harap lengkapi biodata anda</p>
          <Link to="/profile">
            <Button className="button_orange">Isi Biodata</Button>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
