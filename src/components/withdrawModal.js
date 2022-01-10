import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../assets/styles/editProfileModal.css";

const WithdrawModal = (props) => {
  return (
    <div className="modalContainer">
      <Modal
        // backdrop="static"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="modalContainer">
          <h4>Tarik saldo ke akun ini?</h4>
          <div className="m-3">
            <h5>Nominal : Rp 805.600</h5>

            <h5>Nama Pemilik Rekening : Nurdien Adijaya</h5>
            <h5>Nama Bank : Bank Central Asia</h5>
            <h5>Nomor Rekening : 63xxxxxx58</h5>
          </div>

          <Button className="button_orange">Konfirmasi</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WithdrawModal;
