import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/profile.css";

const Profile = () => {
  return (
    <div className="page_container_flex">
      <div className="page_container">
        <Form className="form_container_flex">
          <div className="profile_form_title">
            <h4>Pengaturan Akun</h4>
          </div>
          <div className="form_container">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">ID Affiliate</Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="ID Affiliate"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">Tipe Akun</Form.Label>
                <Form.Select className="formControl_profile">
                  <option>Influencer</option>
                  <option>Advertiser</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">Nama Lengkap</Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Nama Depan"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">
                  Akun Instagram (optional)
                </Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Contoh: instagram.com/AutoViralProgram"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">
                  Akun Facebook (optional)
                </Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Contoh: facebook.com/AutoViralProgram"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">
                  Akun Twitter (optional)
                </Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Contoh: twitter.com/AutoViralProgram"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">
                  Akun Tik Tok (optional)
                </Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Contoh: tiktok.com/@AutoViralProgram"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">
                  Akun Youtube (optional)
                </Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Contoh: youtube.com/AutoViralProgram"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="form_flex">
                <Form.Label className="formTitle">Email address</Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="email"
                  placeholder="Masukan Email"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">Password</Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </Form.Group>
          </div>
          <div className="profile_form_title">
            <h5>Akun Bank</h5>
          </div>
          <div className="form_container">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">
                  Nama Pemilik Rekening
                </Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Nama Pemilik Rekening"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">Nama Bank</Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="text"
                  placeholder="Contoh: Bank Rakyat Indonesia"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">Kode Bank</Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="number"
                  placeholder="Contoh: 002"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="form_flex">
                <Form.Label className="formTitle">Nomor Rekening</Form.Label>
                <Form.Control
                  className="formControl_profile"
                  type="number"
                  placeholder="Nomor Rekening"
                />
              </div>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <div className="profile_btn_container">
              <Link to="/">
                <Button className="button_orange">Cancel</Button>
              </Link>
              <Button className="button_blue" type="submit">
                Save
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
