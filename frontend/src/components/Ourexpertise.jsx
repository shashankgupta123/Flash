import "../css/components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faLightbulb, faMagnifyingGlass, faPenNib, faPeopleGroup, faStar } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const Ourexpertise = () => {
  return (
    <>
      <Container className="mb-5 mt-30  ourexpertisecontainer">
        <Row className="my-5">
          <p>OUR EXPERTISE</p>
          <h3 className="text-center">Modular Solutions for Every Challenge</h3>
          <p className="my-3 text-gray-600 mx-auto text-sm md:text-base text-center">
            Our modularized support model allows you to select tailored services
            based on your specific needs. From standalone bid writing to
            full-cycle management, we adapt to your requirements.
          </p>
        </Row>
        <Row className="g-4">
          {/* ROW 1 Card Start */}
          <Col sm={10} md={6} className="expertise-col from-left">
            <div className="ourservicescard">
              <div>
                <h5>Bid Management Services</h5>
                <p>
                  End-to-end bid management from opportunity identification to
                  final submission, ensuring compliance and competitiveness.
                </p>
              </div>
              <div className="iconcontainer">
                <FontAwesomeIcon icon={faFileLines} />
              </div>
            </div>
          </Col>
          <Col sm={10} md={6} className="expertise-col from-left">
            <div className="ourservicescard">
              <div>
                <h5>Bid Writing</h5>
                <p>
                  Compelling, strategically crafted proposals that articulate your value proposition and differentiate your offering.
                </p>
              </div>
              <div className="iconcontainer">
                <FontAwesomeIcon icon={faPenNib} />
              </div>
            </div>
          </Col>
          {/* ROW 1 Card End */}

          {/* ROW 2 Card Start */}
          <Col sm={10} md={6} className="expertise-col from-left">
            <div className="ourservicescard">
              <div>
                <h5>Bid Design & Presentation</h5>
                <p>
                  Professional visual design and formatting that enhances readability and makes a lasting impression on evaluators.
                </p>
              </div>
              <div className="iconcontainer">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
            </div>
          </Col>
          <Col sm={10} md={6} className="expertise-col from-left">
            <div className="ourservicescard">
              <div>
                <h5>RFP / RFI Solutioning</h5>
                <p>
                  Strategic response development for complex RFPs and RFIs, aligning technical solutions with client requirements.
                </p>
              </div>
              <div className="iconcontainer">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>
            </div>
          </Col>
          {/* ROW 2 Card End */}

          {/* ROW 3 Card Start */}
          <Col sm={10} md={6} className="expertise-col from-left">
            <div className="ourservicescard">
              <div>
                <h5>Due Diligence & Assessment</h5>
                <p>
                  Comprehensive opportunity assessment and go/no-go analysis to optimize your bid portfolio and resource allocation.
                </p>
              </div>
              <div className="iconcontainer">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </Col>
          <Col sm={10} md={6} className="expertise-col from-left">
            <div className="ourservicescard">
              <div>
                <h5>Grant & Tender Support</h5>
                <p>
                  Specialized support for grant applications and public sector tenders, navigating complex procurement processes.
                </p>
              </div>
              <div className="iconcontainer">
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </Col>
          {/* ROW 3 Card End */}
        </Row>
      </Container>
    </>
  );
};

export default Ourexpertise;
