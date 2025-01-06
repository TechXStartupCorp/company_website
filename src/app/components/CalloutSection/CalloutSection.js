"use client";
import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import Image from "next/image";
import styles from "./CalloutSection.module.css";
import { Form, Container } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import DoSomethingForm from "./components/GetSomethingForm/DoSomethingForm";
import SubscribeButton from "../SubscribeBTN/SubscribeBTN";

const CalloutSection = ({
  imageURL,
  alt,
  title,
  text,
  primaryBtnLink,
  primaryBtnText,
  lightBtnLink,
  lightBtnText,
  secondBtn, // Controls rendering of the secondary button
  doSomethingForm,
  doSomethingFormBtnText,
  onClickBtn1,
  onClickBtn2,
  isPrimaryBtnLinkExternal,
  isLightBtnLinkExternal,
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
            <div className="mt-4 pt-2">
              <DoSomethingForm text={doSomethingFormBtnText} />
              {/* <SubscribeButton /> */}
            </div>
          ) : (
            (primaryBtnText || secondBtn) && (
              <div className="d-flex gap-3 mt-5">
                {primaryBtnText && (
                  <CustomBtn
                    link={primaryBtnLink}
                    text={primaryBtnText}
                    variant="primary"
                    onClick={onClickBtn1}
                    isLinkExternal={isPrimaryBtnLinkExternal}
                  />
                )}
                {secondBtn && lightBtnText && lightBtnLink && (
                  <CustomBtn
                    link={lightBtnLink}
                    text={lightBtnText}
                    variant="light"
                    onClick={onClickBtn2}
                    isLinkExternal={isLightBtnLinkExternal}
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default CalloutSection;
