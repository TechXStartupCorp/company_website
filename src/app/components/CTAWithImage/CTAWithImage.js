import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomBtn from "../CustomBtn/CustomBtn";
import styles from "./CTAWithImage.module.css";
import Image from "next/legacy/image";

const CTAWithImage = ({
  header,
  text,
  img,
  alt,
  btnText,
  imageAlign,
  link,
}) => {
  return (
    <div className="sectionWithBGcolor pb-5">
      <Container>
        <Row>
          <Col
            md={12}
            lg={6}
            className={imageAlign === "right" ? "order-last" : ""}
          >
            <div className="imgContainer">
              <Image
                src={img}
                alt={alt}
                layout="fill"
                className="roundedImage"
                priority
              />
            </div>
          </Col>
          <Col
            className={`${imageAlign === "right" ? "order-first" : ""} d-flex align-items-center`}
          >
            <div className={`${styles.finalCTA} d-flex flex-column ps-4`}>
              <h2 className={`xtraBold`}>{header}</h2>
              <p className="mt-3">{text}</p>
              <div className="mt-4 pb-2">
                <CustomBtn
                  thickerPadding={true}
                  fullWidth={true}
                  variant="primary"
                  text={btnText}
                  link={link}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CTAWithImage;
