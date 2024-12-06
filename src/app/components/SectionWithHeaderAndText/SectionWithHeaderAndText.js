import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomBtn from "../CustomBtn/CustomBtn";

const SectionWithHeaderAndText = ({ header, text, btnText, textAlign }) => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col className="d-flex flex-column">
            <h2 className="xtraBold">{header}</h2>
            <div className="mt-3">
              <CustomBtn
                fullWidth={false}
                variant="primary"
                text="Book via Calendy"
              />
            </div>
          </Col>
          <Col>
            <div>
              <p>{text}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionWithHeaderAndText;
