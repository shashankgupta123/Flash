import React from "react";
import "../css/components.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <Container className="pt-5">
          <Row className="flex">
            <Col sm={10} md={6}>
              <h3 className="mx-md-3 underline decoration-wavy decoration-green-700">
                FLASH<span>.</span>
              </h3>
              <p className="my-4 text-gray-600 me-5 text-sm md:text-base">
                International solution engineering and consulting experts.
                Transforming opportunities into wins.
              </p>
              <div className="my-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="socialMediaIcon"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="socialMediaIcon"
                  />
                </a>
              </div>
            </Col>
            <Col sm={10} md={6} className="flex sm:flex-column md:justify-end">
              <div className="d-flex flex-column flex-md-row justify-between spacing-3 footer-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3"
                >
                  About
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3"
                >
                  Why Flash
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3"
                >
                  Carrers
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3"
                >
                  Contact
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 d-md-none"
                >
                  Terms & Conditions
                </a>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row>
            <div className="d-flex justify-content-between align-items-center pb-3 text-center text-md-start">
              <a href="#" target="_blank" className="d-none d-md-inline w-fit tacLink">
                Terms & Condition
              </a>
              <p className="mb-0 copyrightPara">
                <FontAwesomeIcon icon={faCopyright} /> 2026 <a href="https://tahir-shaikh.odoo.com/" target="_blank">The Shaikh Solution</a>. All rights reserved.
              </p>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
