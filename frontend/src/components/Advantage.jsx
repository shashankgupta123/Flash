import React, { useEffect, useRef, useState } from "react";
import "../css/components.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEarthAmericas,
  faBolt,
  faShield,
  faArrowTrendUp,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const Advantage = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const timelineData = [
    {
      icon: faBullseye,
      title: "Precision Delivery",
      description:
        "Every project is executed with meticulous attention to detail, ensuring deadlines are met and quality exceeds expectations.",
    },
    {
      icon: faEarthAmericas,
      title: "Global Expertise",
      description:
        "Operating across 40+ countries, we understand diverse markets, regulations, and procurement practices worldwide.",
    },
    {
      icon: faBolt,
      title: "Agile & Scalable",
      description:
        "From small, focused projects to large, complex engagements—our team scales to match your needs.",
    },
    {
      icon: faShield,
      title: "Proven Track Record",
      description:
        "500+ successful bids with a 95% client retention rate speaks to our commitment to results.",
    },
    {
      icon: faArrowTrendUp,
      title: "Results-Driven",
      description:
        "We measure success by your wins. Our strategic approach maximizes win rates and contract value.",
    },
    {
      icon: faUserGroup,
      title: "Seasoned Experts",
      description:
        "10+ consultants with deep industry experience across sectors including technology, defense, healthcare, and infrastructure.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 },
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Container className="mt-30">
        <Row className="flex flex-wrap my-5">
          <Col sm={10} md={6} className="pe-3">
            <p className="sectionSmallHeading mx-4">The FLASH Advantage</p>
            <p className="sectionBigHeading leading-normal text-6xl my-4">
              Why Leading Organizations Choose FLASH
            </p>
            <p className="my-3 text-gray-600 tracking-widest mx-auto text-xl ">
              We combine deep expertise, global reach, and an unwavering
              commitment to your success. Here's what sets us apart.
            </p>
          </Col>

          <Col sm={10} md={6} ref={timelineRef}>
            <div className="timeline-container">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${visibleItems.includes(index) ? "visible" : ""}`}
                  data-index={index}
                >
                  <div className="timeline-marker">
                    <div className="timeline-icon">
                      {/* <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                      </svg> */}
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    {index < timelineData.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Advantage;
