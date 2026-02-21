import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Partnership = () => {
  return (
    <>
      <Container className="mb-5 mt-30 partnershipcontainer">
        <Row className="my-5">
          <p className="sectionSmallHeading text-center">STRATEGIC PARTNERSHIP</p>
          <h3 className="text-center sectionBigHeading">Pre-Sales Consulting</h3>
          <p className="text-center my-3 text-gray-600 mx-auto text-sm md:text-base" id="partnershipdescription">
            Beyond bid support, we partner with your sales teams to develop
            winning strategies, qualify opportunities, and position your
            solutions for success before the RFP is even released.
          </p>
        </Row>

        <Row className="g-3 justify-center">
          <Col sm={10} md={4} className="partnershipcard ">
            <div className="partnershipcardinner card-left flex flex-column items-center p-5">
              <div className="iconcontainer">
                <FontAwesomeIcon icon={fa1} />
              </div>
              <p className="mt-3 text-2xl text-center fw-bolder">Assess & Qualify</p>
            </div>
          </Col>
          <Col sm={10} md={4} className="partnershipcard ">
            <div className="partnershipcardinner card-middle flex flex-column items-center p-5">
              <div className="iconcontainer">
                <FontAwesomeIcon icon={fa2} />
              </div>
              <p className="mt-3 text-2xl text-center fw-bolder">Strategize & Position</p>
            </div>
          </Col>
          <Col sm={10} md={4} className="partnershipcard ">
            <div className="partnershipcardinner card-right flex flex-column items-center p-5">
              <div className="iconcontainer">
                <FontAwesomeIcon icon={fa3} />
              </div>
              <p className="mt-3 text-2xl text-center fw-bolder">Execute & Win</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partnership;
