import React from "react";
import {
  Container,
  Nav,
  Navbar,
  // NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import Logo from "./logo";

const Header = () => {
  const logout = () => {
    // localStorage.clear();
    localStorage.removeItem("token");
    window.location.replace("/");
  };
  return (
    <div className="">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand className="navbarBrand">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Logo />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 navbarColor">
                <Nav.Item className="nav-link">
                  <Link to="/">Dashboard</Link>
                </Nav.Item>
                <Nav.Item className="nav-link">
                  <Link to="/offer">Penawaran</Link>
                </Nav.Item>
                <Nav.Item className="nav-link">
                  <Link to="/income-details">Rincian</Link>
                </Nav.Item>
                <Nav.Item className="nav-link">
                  <Link to="/campaign">Campaign Baru</Link>
                </Nav.Item>
                {/* <NavDropdown title="Pemasukan" id="offcanvasNavbarDropdown">
                  <NavDropdown.ItemText>
                    <Link to="/income-details">Rincian</Link>
                  </NavDropdown.ItemText>
                  <NavDropdown.ItemText>
                    <Link to="/withdraw">Tarik Saldo</Link>
                  </NavDropdown.ItemText>
                </NavDropdown> */}
                <Nav.Item className="nav-link">
                  <Link to="/profile">Data Akun</Link>
                </Nav.Item>
                {/* <NavDropdown title="Akun" id="offcanvasNavbarDropdown">
                  <NavDropdown.ItemText>
                    <Link to="/profile">Data Profil</Link>
                  </NavDropdown.ItemText>
                  <NavDropdown.ItemText>
                    <Link to="/payment-data"> Data Pembayaran</Link>
                  </NavDropdown.ItemText>
                </NavDropdown> */}
                <Nav.Link to="/" onClick={logout}>
                  Log out
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
