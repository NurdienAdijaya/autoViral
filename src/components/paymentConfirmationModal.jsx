import { IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../assets/styles/paymentConfirmationModal.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const PaymentConfirmationModal = (props) => {
  // const [transfer_proof, setTransferProof] = useState("");
  const [preview, setPreview] = useState("");

  const handleHeaderImage = (e) => {
    // setTransferProof(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    reader.onerror = () => {
      // console.log("header error");
    };
  };
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

          <div className="photo_container">
            <div className="photo_preview_container">
              <div className="preview_container">
                {/* {preview ? null : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      height="70rem"
                      alt=""
                    />
                  )} */}
                <label className="upload_input" htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleHeaderImage}
                  />
                  <IconButton
                    className="upload_icon"
                    aria-label="upload picture"
                    component="span"
                    style={{
                      color: "white",
                    }}
                  >
                    <AddAPhotoIcon className="upload_icon" />
                  </IconButton>
                </label>
                <img className="preview_image" src={preview} alt="" />
              </div>
            </div>
          </div>
          <Button className="button_blue" type="submit">
            Upload Bukti Transfer
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PaymentConfirmationModal;
