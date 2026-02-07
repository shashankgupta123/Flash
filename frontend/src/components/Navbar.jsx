import React from "react";
import "../css/components.css";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";

const PageNavbar = () => {
  return (
    <>
      {/* <Container className="my-4">
        <Row className="flex justify-evenly">
          <Col>
            <h3 className="flex items-center">
              Flash<span className="text-emerald-600">.</span>
            </h3>
          </Col>
          <Col className="flex justify-center items-center">
            
          </Col>
          <Col className="flex justify-end items-center navbarBtn">
           <Button>Get in Touch ↗</Button>
          </Col>
        </Row>
      </Container> */}
      <Navbar expand="lg" fixed="top" className="bg-white py-3">
        <Container>
          {/* Logo – always visible */}
          <Navbar.Brand href="/" className="font-bold">
            <h4>FLASH<span className="text-emerald-600">.</span></h4>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto text-center gap-lg-4">
              <Nav.Link className="nav-underline" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-underline" href="#link">Services</Nav.Link>
              <Nav.Link className="nav-underline" href="#link">Why Flash</Nav.Link>
              <Nav.Link className="nav-underline" href="#link">About</Nav.Link>
              <Nav.Link className="nav-underline" href="#link">Contact</Nav.Link>
            </Nav>

            {/* Button moves INTO menu on mobile */}
            <div className="d-flex justify-content-center mt-3 mt-lg-0">
              <Button className="navbarBtn px-4">Get in Touch ↗</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PageNavbar;
