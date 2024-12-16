import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomBtn from "../CustomBtn/CustomBtn";

const SectionWithHeaderAndText = ({ header, text, btnText, textAlign }) => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col lg={9} className="d-flex flex-column">
            <h3 className="xtraBold">{header}</h3>
            <p className="mt-3">{text}</p>
            <div className="mt-3">
              <CustomBtn
                fullWidth={false}
                variant="primary"
                text="Book via Calendy"
              />
            </div>
          </Col>
          {/* //// optional  */}
          {/* <Col>
            <div>
              <p>{text}</p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default SectionWithHeaderAndText;
