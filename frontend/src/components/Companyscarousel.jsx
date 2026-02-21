import React from "react";
import "../css/components.css";
import { Container, Row } from "react-bootstrap";

const Companyscarousel = () => {
  const items = ["Enterprise", "Government", "NGO", "International"];
  return (
    <>
      <Container>
        <Row className="trusted-wrapper">
          <p className="trusted-heading">TRUSTED BY ORGANIZATIONS WORLDWIDE</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...items, ...items].map((item, i) => (
                <span key={i} className="marquee-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Companyscarousel;
