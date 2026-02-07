import React from "react";
import "../css/components.css";
import { Button, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container className="pt-35">
        <Row className="my-5">
          <main className="heroBody text-center px-3">
            <p className="heroheadline mb-3"><span>🧩 International Consulting Excellence</span></p>

            <h1 className="font-extrabold text-4xl md:text-6xl leading-tight">
              Engineering Solutions. <br /> <span>Delivering Results.</span>
            </h1>

            <p className="my-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              FLASH is an internationally operating team of{" "}
              <u>solution engineering</u> and {" "} 
              <u>consulting experts</u>. From strategic bids to complex tenders, 
              we transform opportunities into wins.
            </p>

              <ul className="flex flex-wrap justify-center gap-4 font-semibold my-4">
                <li className="mx-2">✅ 10+ Seasoned Consultants</li>
                <li className="mx-2">✅ Global Reach</li>
                <li className="mx-2">✅ Precision Delivery</li>
              </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5">
              <Button className="px-6 py-3">Request Consultation ➔</Button>
              <Button variant="outline-success" className="px-6 py-3">Explore Services</Button>
            </div>
          </main>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
