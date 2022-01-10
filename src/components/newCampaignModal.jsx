import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../assets/styles/newCampaignModal.css";

const NewCampaignModal = (props) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <div className="campaign_modal_component">
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="campaign_modal_container">
          {!success ? (
            <Form onSubmit={handleSubmit}>
              <div className="campaign_form_title">
                <h3>Buat Campaign Baru</h3>
              </div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="campaign_form_flex">
                    <Form.Label className="campaign_form_title">
                      Nama Campaign
                    </Form.Label>
                    <Form.Control
                      className="formControl"
                      type="text"
                      placeholder="Nama Campaign"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="campaign_form_flex">
                    <Form.Label className="campaign_form_title">
                      Kategori
                    </Form.Label>
                    <Form.Select className="formControl">
                      <option>Website</option>
                      <option>Youtube Channel</option>
                      <option>E-Commerce</option>
                      <option>Olahraga & Outdoor</option>
                      <option>Automotive</option>
                      <option>Computer & Accessories</option>
                      <option>Mobile Phone & Accessories</option>
                      <option>Fashion</option>
                      <option>Muslim Fashion</option>
                      <option>Perawatan & Kecantikan</option>
                      <option>Photograph</option>
                      <option>Event</option>
                      <option>Cafe & Tempat Makan</option>
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>Twitter</option>
                      <option>Tik Tok</option>
                    </Form.Select>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="campaign_form_flex">
                    <Form.Label className="campaign_form_title">
                      Paket Campaign
                    </Form.Label>
                    <Form.Select className="formControl">
                      <option>
                        10000 klik + Bonus 5000 Klik / Rp 3.000.000
                      </option>
                      <option>
                        5000 klik + Bonus 1800 Klik / Rp 1.500.000
                      </option>
                      <option>
                        4000 klik + Bonus 1120 Klik / Rp 1.200.000
                      </option>
                      <option>3000 klik + Bonus 630 Klik / Rp 900.000</option>
                      <option>2500 klik + Bonus 375 Klik / Rp 750.000</option>
                      <option>2000 klik + Bonus 200 Klik / Rp 600.000</option>
                      <option>1500 klik + Bonus 90 Klik / Rp 450.000</option>
                      <option>1000 klik + Bonus 30 Klik / Rp 300.000</option>
                      <option>500 klik + Bonus 5 Klik / Rp 150.000</option>
                      <option>200 klik / Rp 60.000</option>
                    </Form.Select>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="campaign_form_flex">
                    <Form.Label className="campaign_form_title">
                      Link URL
                    </Form.Label>
                    <Form.Control
                      className="formControl"
                      type="text"
                      placeholder="Contoh: https://www.instagram.com"
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="d-flex justify-content-center">
                <div className="profile_btn_container">
                  <Button className="button_orange" onClick={props.onHide}>
                    Cancel
                  </Button>

                  <Button className="button_blue" type="submit">
                    Buat Campaign
                  </Button>
                </div>
              </div>
            </Form>
          ) : (
            <div className="success_container">
              <iframe
                src="https://embed.lottiefiles.com/animation/92201"
                title="success"
              ></iframe>
              <h3 className="mb-5"> Campaign Berhasil Dibuat</h3>
              <div>
                <h4 className="mb-4 align_center">Nomor Order: 123-4567-890</h4>
                <h4 className="mb-4 align_center">
                  Silahkan lakukan pembayaran ke:
                </h4>
                <div className="mb-4">
                  <h4>Pemilik Rekening: xxxxxxxxxxx</h4>
                  <h4>Nomor Rekening: xxxxxxxxxx</h4>
                  <h4>Nama Bank: xxxx xxxxxxxx xxxxxxx</h4>
                </div>
                <h4 className="align_center mb-3">Dan lakukan konfirmasi</h4>
              </div>
              <div className="profile_btn_container">
                <Button className="button_orange" onClick={props.onHide}>
                  Close
                </Button>

                <Button className="button_blue" type="submit">
                  Konfirmasi
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewCampaignModal;
