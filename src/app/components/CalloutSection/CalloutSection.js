"use client";
import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import Image from "next/image";
import styles from "./CalloutSection.module.css";
import { Form, Container } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import DoSomethingForm from "./components/GetSomethingForm/DoSomethingForm";

const CalloutSection = ({
  imageURL,
  alt,
  title,
  text,
  primaryBtnLink,
  primaryBtnText,
  lightBtnLink,
  lightBtnText,
  secondBtn,
  doSomethingForm,
  doSomethingFormBtnText
}) => {
  return (
    <Container>
      <div
        className={`${styles.heroContainer} w-100 mt-4 position-relative d-flex`}
      >
        <div className={styles.optionalDarkOverlay}></div>
        <Image
          className={`${styles.heroImage}`}
          src={imageURL}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
        <div className={`${styles.textOverlay}`}>
          <h1 className="fw-bold">{title}</h1>
          <p className="mt-3">{text}</p>
          {doSomethingForm ? (
            <DoSomethingForm text={doSomethingFormBtnText}/>
          ) : (
            <div className="d-flex gap-3 mt-5">
              <CustomBtn
                link={primaryBtnLink}
                text={primaryBtnText}
                variant="primary"
              />
              {secondBtn && (
                <CustomBtn
                  link={lightBtnLink}
                  text={lightBtnText}
                  variant="light"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CalloutSection;
