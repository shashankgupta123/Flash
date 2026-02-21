import React, { useState } from "react";
import "../css/components.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDotCircle } from "@fortawesome/free-solid-svg-icons";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <section className="contact-fixed-image">
        <div className="contact-overlay">
          <Container className="py-5">
            <Row>
              <Col sm={10} md={6} className="contactLeftContainer">
                {/* <p>GET IN TOUCH</p> */}
                <h3 className="tracking-wider">
                  Ready to Transform Your Next Bid?
                </h3>
                <p className="my-4 text-white-600 tracking-widest max-w-2xl text-sm md:text-base">
                  Whether you're preparing for a major tender, need expert bid
                  support, or want to discuss a partnership opportunity, we're
                  here to help. Reach out today for a confidential consultation.
                </p>
                <div className="d-flex justify-between">
                  <div className="contactLeftinnerdiv p-3">
                    <h6 className="text-green-600">Request Consultaion</h6>
                    <p className="text-white-600 max-w-2xl text-sm md:text-base">
                      Schedule a free 30-minute strategy session with our
                      experts.
                    </p>
                    <Button>
                      Book Now <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </div>
                  <div className="contactLeftinnerdiv p-3">
                    <h6 className="text-green-700">Partner With Us</h6>
                    <p className="text-white-600 max-w-2xl text-sm md:text-base">
                      Explore collaboration opportunities for agencies and
                      consultancies.
                    </p>
                    <Button>
                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col
                sm={10}
                md={6}
                className="px-3 my-4 my-md-0 contactRightContainer"
              >
                <Form className="contactInputContainer">
                  <p>
                    <FontAwesomeIcon icon={faDotCircle} /> GET IN TOUCH
                  </p>
                  <Row className="flex flex-wrap m-2">
                    <Col sm={10} md={6} className="flex flex-column">
                      <label htmlFor="">Name</label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                      />
                      {/* <input type="text" placeholder="Hello" /> */}
                    </Col>
                    <Col sm={10} md={6} className="flex flex-column">
                      <label htmlFor="">Email</label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="youremail@email.com"
                      />
                      {/* <input type="email" name="email" value={formData.email} onChange={handleInputChange} /> */}
                    </Col>
                  </Row>
                  <Row className="flex flex-wrap m-2">
                    <Col md={12} className="flex flex-column">
                      <label htmlFor="">Company</label>
                      <Form.Control
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                      />
                      {/* <input type="text" name="company" value={formData.company} onChange={handleInputChange} /> */}
                    </Col>
                  </Row>
                  <Row className="flex flex-wrap m-2">
                    <Col md={12} className="flex flex-column">
                      <label htmlFor="">Message</label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Enter Your Query Here"
                      />
                    </Col>
                  </Row>

                  <Row className="flex flex-wrap m-2 contactsubmitBtn">
                    <Col sm={10} md={6} className="px-2 mt-3">
                      <Button>Send Us a Message</Button>
                    </Col>
                    {/* <Col sm={10} md={6} className="px-2"></Col> */}
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Contactform;
